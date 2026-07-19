import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { load as loadYaml } from 'js-yaml'

const root = process.cwd()
const errors = []

function loadOptionalYaml(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const text = raw
    .split(/\r?\n/)
    .filter((line) => !line.trim().startsWith('#'))
    .join('\n')
    .trim()

  return text ? loadYaml(text) : null
}


const pagesDir = path.join(root, 'content/en/manual/pages')
const pages = fs.readdirSync(pagesDir).filter((name) => /^\d{3}\.txt$/.test(name)).sort()
if (pages.length !== 85) errors.push(`Expected 85 English manual page files; found ${pages.length}.`)
for (const page of pages) {
  const text = fs.readFileSync(path.join(pagesDir, page), 'utf8').trim()
  if (!text) errors.push(`Manual page ${page} is empty.`)
}


const namesFile = path.join(root, 'content/en/names/names.yml')
if (!fs.existsSync(namesFile)) {
  errors.push('Missing content/en/names/names.yml.')
} else {
  const parsed = loadYaml(fs.readFileSync(namesFile, 'utf8'))
  const names = Array.isArray(parsed?.names) ? parsed.names : []
  if (names.length !== 99) errors.push(`Expected 99 divine names; found ${names.length}.`)
  const numbers = new Set()
  for (const entry of names) {
    const number = Number(entry?.number)
    if (!Number.isInteger(number) || number < 1 || number > 99) errors.push(`Invalid divine-name number: ${entry?.number}.`)
    if (numbers.has(number)) errors.push(`Duplicate divine-name number: ${number}.`)
    numbers.add(number)
    if (!String(entry?.arabic || '').trim()) errors.push(`Divine name ${number} has no Arabic text.`)
    if (!String(entry?.transliteration || '').trim()) errors.push(`Divine name ${number} has no transliteration.`)
    if (!String(entry?.meaning || '').trim()) errors.push(`Divine name ${number} has no meaning.`)
    if (!String(entry?.abjad || '').trim()) errors.push(`Divine name ${number} has no Abjad value.`)    
  }
}

for (const locale of ['en', 'fr', 'de', 'es']) {
  const quotesDir = path.join(root, `content/${locale}/quotes`)
  if (!fs.existsSync(quotesDir)) continue

  for (const file of fs.readdirSync(quotesDir).filter((name) => name.endsWith('.txt'))) {
    const raw = fs.readFileSync(path.join(quotesDir, file), 'utf8').replace(/\r\n?/g, '\n').trim()
    if (!raw) {
      errors.push(`${locale}/${file}: quote file is empty.`)
      continue
    }

    const lines = raw.split('\n')
    const authorLine = lines.findIndex((line) => line.trim() && !line.trim().startsWith('#'))
    if (authorLine < 0) {
      errors.push(`${locale}/${file}: missing author on the first non-empty line.`)
      continue
    }

    const author = lines[authorLine].trim()
    const body = lines.slice(authorLine + 1).join('\n').trim()
    const quotes = body.split(/\n\s*\n+/).map((value) => value.trim()).filter(Boolean)

    if (!author) errors.push(`${locale}/${file}: author is blank.`)
    if (!quotes.length) errors.push(`${locale}/${file}: no quote blocks found after the author.`)
  }
}


for (const locale of ['en', 'fr', 'de', 'es']) {
  const quranDir = path.join(root, `content/${locale}/quran`)
  if (fs.existsSync(quranDir)) {
    const verseFile = path.join(quranDir, 'verse.yml')
  
    if (!fs.existsSync(verseFile)) {
      errors.push(`${locale}: missing content/${locale}/quran/verse.yml.`)
    } else {
      const data = loadYaml(fs.readFileSync(verseFile, 'utf8'))
      const translator = String(data?.translator || '').trim()
      const verses = Array.isArray(data?.verses) ? data.verses : []
  
      if (!translator) errors.push(`${locale}/verse.yml: translator is missing.`)
      if (!verses.length) errors.push(`${locale}/verse.yml: no Quran verses found.`)
  
      const ids = new Set()
  
      for (const entry of verses) {
        const id = String(entry?.id || '').trim()
        if (!id) errors.push(`${locale}/verse.yml: a Quran entry has no id.`)
        if (ids.has(id)) errors.push(`${locale}/verse.yml: duplicate Quran id ${id}.`)
        ids.add(id)
  
        if (!String(entry?.sura || '').trim()) errors.push(`${locale}/verse.yml: ${id || '(no id)'} has no sura name.`)
        if (!String(entry?.verse || '').trim()) errors.push(`${locale}/verse.yml: ${id || '(no id)'} has no verse number.`)
        if (!String(entry?.text || '').trim()) errors.push(`${locale}/verse.yml: ${id || '(no id)'} has no text.`)
      }
    }
  }


  const videoDir = path.join(root, `content/${locale}/videos`)
  if (!fs.existsSync(videoDir)) continue
  for (const file of fs.readdirSync(videoDir).filter((name) => name.endsWith('.txt'))) {
    const lines = fs.readFileSync(path.join(videoDir, file), 'utf8').split(/\r?\n/)
    lines.forEach((line, index) => {
      const value = line.trim()
      if (!value || value.startsWith('#')) return
      const parts = value.split('|')
      if (parts.length < 2) {
        errors.push(`${locale}/${file}:${index + 1}: expected Name | URL.`)
        return
      }
      const url = parts.slice(1).join('|').trim()
      if (!/youtu(?:\.be|be\.com)/i.test(url)) errors.push(`${locale}/${file}:${index + 1}: URL is not a YouTube link.`)
      if (!/[?&](?:start|t)=/i.test(url)) console.warn(`[content warning] ${locale}/${file}:${index + 1}: YouTube link has no start time; the full video will open.`)
      if (!/[?&]end=/i.test(url)) console.warn(`[content warning] ${locale}/${file}:${index + 1}: YouTube link has no end time; playback will continue to the end.`)
    })
  }
}

const weeklyDir = path.join(root, 'content/en/weekly')
if (fs.existsSync(weeklyDir)) {
  for (const file of fs.readdirSync(weeklyDir).filter((name) => name.endsWith('.yml'))) {
    const data = loadYaml(fs.readFileSync(path.join(weeklyDir, file), 'utf8'))
    const expectedWeek = file.replace(/\.yml$/, '')

    if (String(data?.week || '') !== expectedWeek) {
      errors.push(`${file}: week must match the filename (${expectedWeek}).`)
    }

    if (!String(data?.starts || '').trim()) errors.push(`${file}: starts is missing.`)
    if (!String(data?.title || '').trim()) errors.push(`${file}: title is missing.`)

    for (const field of ['reading', 'contemplation', 'assignment']) {
      if (!String(data?.[field] || '').trim()) errors.push(`${file}: ${field} is empty.`)
    }
  }
}


const obsoleteSectionsFile = path.join(
  root,
  'content/en/manual/sections.yml'
)
if (fs.existsSync(obsoleteSectionsFile)) {
  errors.push(
    'Remove obsolete content/en/manual/sections.yml; chapters.yml is the single logical-manual manifest.'
  )
}

const eventsDir = path.join(root, 'content/events')
const eventIds = new Set()
if (fs.existsSync(eventsDir)) {
  for (const file of fs.readdirSync(eventsDir).filter((name) => name.endsWith('.yml'))) {
    const parsed = loadOptionalYaml(path.join(eventsDir, file))
    const entries = Array.isArray(parsed) ? parsed : []

    for (const entry of entries) {
      const id = String(entry?.id || '').trim()
      const title = String(entry?.title || '').trim()
      const calendar = String(entry?.calendar || '').trim()

      if (!id) errors.push(`${file}: an event has no id.`)
      if (eventIds.has(id)) errors.push(`${file}: duplicate event id ${id}.`)
      eventIds.add(id)

      if (!title) errors.push(`${file}: ${id || '(no id)'} has no title.`)
      if (entry?.enabled !== undefined && typeof entry.enabled !== 'boolean') {
        errors.push(`${file}: ${id || '(no id)'} enabled must be true or false.`)
      }

      if (!['gregorian', 'diyanet'].includes(calendar)) {
        errors.push(`${file}: ${id || '(no id)'} calendar must be gregorian or diyanet.`)
      }

      if (calendar === 'gregorian') {
        const date = String(entry?.date || '').trim()
        const start = String(entry?.start || '').trim()
        if (!date && !start) {
          errors.push(`${file}: ${id || '(no id)'} needs date or start.`)
        }
        if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
          errors.push(`${file}: ${id || '(no id)'} date must be YYYY-MM-DD.`)
        }
      }

      if (calendar === 'diyanet') {
        const day = Number(entry?.hijriDay)
        if (!Number.isInteger(day) || day < 1 || day > 30) {
          errors.push(`${file}: ${id || '(no id)'} hijriDay must be 1-30.`)
        }
        if (!String(entry?.hijriMonth || '').trim()) {
          errors.push(`${file}: ${id || '(no id)'} has no hijriMonth.`)
        }
      }

      const startTime = String(entry?.startTime || '').trim()
      if (startTime && !/^([01]\d|2[0-3]):[0-5]\d$/.test(startTime)) {
        errors.push(`${file}: ${id || '(no id)'} startTime must be HH:MM.`)
      }
    }
  }
}

for (const locale of ['en', 'fr', 'de', 'es']) {
  const activitiesDir = path.join(root, `content/${locale}/activities`)
  if (!fs.existsSync(activitiesDir)) continue

  for (const file of fs.readdirSync(activitiesDir).filter((name) => name.endsWith('.yml'))) {
    const parsed = loadOptionalYaml(path.join(activitiesDir, file))
    const entries = Array.isArray(parsed) ? parsed : []

    for (const entry of entries) {
      if (!String(entry?.week || '').trim()) errors.push(`${locale}/${file}: an activity has no week.`)
      if (!String(entry?.title || '').trim()) errors.push(`${locale}/${file}: an activity has no title.`)
      if (!String(entry?.url || '').trim()) errors.push(`${locale}/${file}: an activity has no url.`)
      if (entry?.enabled !== undefined && typeof entry.enabled !== 'boolean') {
        errors.push(`${locale}/${file}: activity enabled must be true or false.`)
      }
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exit(1)
}
console.log(`Validated ${pages.length} manual pages, 99 divine names, and editable content files.`)
