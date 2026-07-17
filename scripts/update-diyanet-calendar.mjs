import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { load as loadYaml } from 'js-yaml'
import * as cheerio from 'cheerio'

const root = process.cwd()
const sourcePath = path.join(root, 'content/calendar/diyanet-source.yml')
const outputPath = path.join(root, 'content/calendar/diyanet-calendar.json')
const source = loadYaml(await fs.readFile(sourcePath, 'utf8'))
const url = String(source?.url || '')
if (!url) throw new Error('Missing content/calendar/diyanet-source.yml URL.')

const response = await fetch(url, {
  headers: {
    'user-agent': 'AQRT-Manual-GitHub-Pages-Build/1.0',
    'accept-language': 'tr-TR,tr;q=0.9,en;q=0.7'
  }
})
if (!response.ok) throw new Error(`Diyanet request failed: ${response.status}`)
const html = await response.text()
const $ = cheerio.load(html)
const dates = {}

const gregorianMonths = {
  Ocak: 1, Şubat: 2, Mart: 3, Nisan: 4, Mayıs: 5, Haziran: 6,
  Temmuz: 7, Ağustos: 8, Eylül: 9, Ekim: 10, Kasım: 11, Aralık: 12
}
const hijriMonths = '(?:Muharrem|Safer|Rebiülevvel|Rebiülahir|Cemaziyelevvel|Cemaziyelahir|Recep|Şaban|Ramazan|Şevval|Zilkade|Zilhicce)'
const monthNames = Object.keys(gregorianMonths).join('|')
const rowPattern = new RegExp(`(\\d{1,2})\\s+(${monthNames})\\s+(\\d{4})(?:\\s+\\p{L}+)?\\s+(\\d{1,2})\\s+(${hijriMonths})\\s+(\\d{3,4})`, 'gu')

function addMatches(text) {
  const compact = text.replace(/\s+/g, ' ').trim()
  for (const match of compact.matchAll(rowPattern)) {
    const [, gDay, gMonthName, gYear, hDay, hMonth, hYear] = match
    const gMonth = String(gregorianMonths[gMonthName]).padStart(2, '0')
    const iso = `${gYear}-${gMonth}-${String(gDay).padStart(2, '0')}`
    dates[iso] = `${Number(hDay)} ${hMonth} ${hYear}`
  }
}

$('tr').each((_index, row) => addMatches($(row).text()))
if (Object.keys(dates).length < 30) addMatches($('body').text())

if (Object.keys(dates).length < 30) {
  throw new Error(`Only ${Object.keys(dates).length} Diyanet date mappings were detected; existing file was kept.`)
}

const output = {
  source: 'Diyanet İşleri Başkanlığı',
  sourceUrl: url,
  updatedAt: new Date().toISOString(),
  dates: Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)))
}
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
console.log(`Wrote ${Object.keys(dates).length} Diyanet date mappings.`)
