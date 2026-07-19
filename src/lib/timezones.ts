export type ClockTimeFormat = '12h' | '24h'

const specialLabels: Record<string, string> = {
  'America/New_York': 'New York',
  'America/Toronto': 'Toronto',
  'Europe/Istanbul': 'Istanbul',
  'Europe/London': 'London',
  'Europe/Paris': 'Paris',
  'Indian/Mauritius': 'Mauritius',
  UTC: 'UTC'
}

export function formatTimeZoneLabel(timeZone: string): string {
  const known = specialLabels[timeZone]
  if (known) return known

  const finalPart = timeZone.split('/').pop() || timeZone
  return finalPart.replace(/_/g, ' ')
}

export function formatClockTime(
  date: Date,
  timeZone: string,
  format: ClockTimeFormat
): string {
  const formatter = new Intl.DateTimeFormat(
    format === '12h' ? 'en-US' : 'en-GB',
    {
      timeZone,
      hour: format === '12h' ? 'numeric' : '2-digit',
      minute: '2-digit',
      hour12: format === '12h',
      hourCycle: format === '24h' ? 'h23' : undefined
    }
  )

  const parts = formatter.formatToParts(date)
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value || ''

  const hour = read('hour')
  const minute = read('minute')
  const period = read('dayPeriod').toLowerCase()

  return format === '12h'
    ? `${hour} : ${minute} ${period}`
    : `${hour.padStart(2, '0')} : ${minute}`
}

export function supportedTimeZones(): string[] {
  const intl = Intl as typeof Intl & {
    supportedValuesOf?: (key: 'timeZone') => string[]
  }

  if (typeof intl.supportedValuesOf === 'function') {
    return intl.supportedValuesOf('timeZone')
  }

  return [
    'America/New_York',
    'America/Toronto',
    'Europe/Istanbul',
    'Europe/London',
    'Europe/Paris',
    'Indian/Mauritius',
    'Asia/Dubai',
    'Asia/Karachi',
    'Asia/Kolkata',
    'Asia/Kuala_Lumpur',
    'Asia/Tokyo',
    'Australia/Sydney'
  ]
}
