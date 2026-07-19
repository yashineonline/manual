import type { DiyanetCalendar } from './types'

export function localIsoDate(date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function dateInTimeZone(
  date = new Date(),
  timeZone = 'America/New_York'
): Date {
  try {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(date)

    const readPart = (type: 'year' | 'month' | 'day') =>
      Number(parts.find((part) => part.type === type)?.value)

    const year = readPart('year')
    const month = readPart('month')
    const day = readPart('day')

    if (!year || !month || !day) return date

    return new Date(year, month - 1, day, 12, 0, 0, 0)
  } catch (error) {
    console.warn(
      `Unable to format date for timezone ${timeZone}:`,
      error
    )
    return date
  }
}

export function formatGregorianDay(date = new Date()): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long'
  }).format(date)
}

export function formatGregorianDate(date = new Date()): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function formatGregorian(date = new Date()): string {
  return `${formatGregorianDay(date)}, ${formatGregorianDate(date)}`
}

export function formatIslamicFallback(
  date = new Date(),
  timeZone?: string
): string {
  return new Intl.DateTimeFormat('en-u-ca-islamic', {
    timeZone,
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function getDiyanetDate(
  calendar: DiyanetCalendar,
  date = new Date()
): { value: string; official: boolean } {
  const mapped = calendar.dates[localIsoDate(date)]
  if (mapped) return { value: mapped, official: true }
  return { value: formatIslamicFallback(date), official: false }
}

const monthAliases: Record<string, string> = {
  muharrem: 'muharrem', muharram: 'muharrem',
  safer: 'safer', safar: 'safer',
  rebiulevvel: 'rebiulevvel', 'rebiülevvel': 'rebiulevvel', 'rabiulawwal': 'rebiulevvel', 'rabi-al-awwal': 'rebiulevvel', 'rabi ul awwal': 'rebiulevvel',
  rebiulahir: 'rebiulahir', 'rebiülahir': 'rebiulahir', 'rabi-al-thani': 'rebiulahir',
  cemaziyelevvel: 'cemaziyelevvel', 'cemâziyelevvel': 'cemaziyelevvel', 'jumada-al-awwal': 'cemaziyelevvel',
  cemaziyelahir: 'cemaziyelahir', 'cemâziyelâhir': 'cemaziyelahir', 'jumada-al-thani': 'cemaziyelahir',
  recep: 'recep', rajab: 'recep',
  saban: 'saban', 'şaban': 'saban', shaban: 'saban',
  ramazan: 'ramazan', ramadan: 'ramazan',
  sevval: 'sevval', 'şevval': 'sevval', shawwal: 'sevval',
  zilkade: 'zilkade', 'dhu-al-qidah': 'zilkade',
  zilhicce: 'zilhicce', 'dhu-al-hijjah': 'zilhicce'
}

export function normalizeHijriMonth(value: string): string {
  const key = value
    .toLocaleLowerCase('tr-TR')
    .replace(/[’'._]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return monthAliases[key] || key.replace(/\s|-/g, '')
}

export function parseDiyanetDate(
  value: string
): { day: number; month: string; year: number } | null {
  const match = value
    .trim()
    .match(/^(\d{1,2})\s+(.+?)\s+(\d{3,4})$/)

  if (!match) return null

  return {
    day: Number(match[1]),
    month: normalizeHijriMonth(match[2]),
    year: Number(match[3])
  }
}

export function deterministicIndex(
  length: number,
  date = new Date(),
  salt = 0
): number {
  if (length <= 0) return -1

  const key = Number(
    `${date.getFullYear()}` +
    `${String(date.getMonth() + 1).padStart(2, '0')}` +
    `${String(date.getDate()).padStart(2, '0')}`
  )

  return Math.abs(key + salt) % length
}
