import { DateTime } from 'luxon'
import type { CalendarEvent, DiyanetCalendar } from './types'
import {
  formatIslamicFallback,
  normalizeHijriMonth,
  parseDiyanetDate
} from './dates'
import { formatTimeZoneLabel } from './timezones'

export const DEFAULT_GREGORIAN_EVENT_TIMEZONE = 'America/New_York'
export const DEFAULT_DIYANET_EVENT_TIMEZONE = 'Europe/Istanbul'

export interface EventOccurrence {
  event: CalendarEvent
  dateKey: string
  displayDate: string
  displayTime: string
  timezone: string
  timezoneLabel: string
  sortTime: number
  dateKnown: boolean
}

export function eventTimezone(event: CalendarEvent): string {
  if (event.timezone?.trim()) return event.timezone.trim()

  return event.calendar === 'diyanet'
    ? DEFAULT_DIYANET_EVENT_TIMEZONE
    : DEFAULT_GREGORIAN_EVENT_TIMEZONE
}

function isoDateInZone(date: Date, timeZone: string): string {
  return DateTime.fromJSDate(date)
    .setZone(timeZone)
    .toFormat('yyyy-LL-dd')
}

function eventDateTime(
  dateKey: string,
  event: CalendarEvent,
  timeZone: string
): DateTime {
  const time = event.startTime?.trim() || '00:00'
  return DateTime.fromISO(`${dateKey}T${time}`, { zone: timeZone })
}

function formatOccurrenceTime(
  dateTime: DateTime,
  event: CalendarEvent
): string {
  if (!event.start && !event.startTime) return ''

  return dateTime.toLocaleString(DateTime.TIME_SIMPLE)
}

function gregorianOccurrence(
  event: CalendarEvent,
  now: Date
): EventOccurrence | null {
  const timezone = eventTimezone(event)
  const todayKey = isoDateInZone(now, timezone)

  let dateTime: DateTime

  if (event.start?.trim()) {
    dateTime = DateTime.fromISO(event.start.trim(), {
      zone: timezone,
      setZone: true
    })
  } else if (event.date?.trim()) {
    dateTime = eventDateTime(event.date.trim(), event, timezone)
  } else {
    return null
  }

  if (!dateTime.isValid) return null

  const dateKey = dateTime.setZone(timezone).toFormat('yyyy-LL-dd')
  if (dateKey < todayKey) return null

  return {
    event,
    dateKey,
    displayDate: dateTime.setZone(timezone).toLocaleString({
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    displayTime: formatOccurrenceTime(dateTime.setZone(timezone), event),
    timezone,
    timezoneLabel: formatTimeZoneLabel(timezone),
    sortTime: dateTime.toMillis(),
    dateKnown: true
  }
}

function matchingDiyanetDateKeys(
  event: CalendarEvent,
  calendar: DiyanetCalendar
): string[] {
  if (
    event.hijriDay === undefined ||
    !event.hijriMonth?.trim()
  ) {
    return []
  }

  const expectedMonth = normalizeHijriMonth(event.hijriMonth)

  return Object.entries(calendar.dates)
    .filter(([, value]) => {
      const parsed = parseDiyanetDate(value)
      return Boolean(
        parsed &&
        parsed.day === event.hijriDay &&
        parsed.month === expectedMonth
      )
    })
    .map(([dateKey]) => dateKey)
    .sort()
}

function diyanetOccurrence(
  event: CalendarEvent,
  calendar: DiyanetCalendar,
  now: Date
): EventOccurrence | null {
  const timezone = eventTimezone(event)
  const todayKey = isoDateInZone(now, timezone)
  const dateKey = matchingDiyanetDateKeys(event, calendar)
    .find((candidate) => candidate >= todayKey)

  if (!dateKey) {
    const hijriLabel = [
      event.hijriDay,
      event.hijriMonth
    ].filter(Boolean).join(' ')

    return {
      event,
      dateKey: '',
      displayDate: hijriLabel,
      displayTime: '',
      timezone,
      timezoneLabel: formatTimeZoneLabel(timezone),
      sortTime: Number.POSITIVE_INFINITY,
      dateKnown: false
    }
  }

  const dateTime = eventDateTime(dateKey, event, timezone)
  const hijriDate = calendar.dates[dateKey] || ''
  const gregorianDate = dateTime.toLocaleString({
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return {
    event,
    dateKey,
    displayDate: `${hijriDate} · ${gregorianDate}`,
    displayTime: formatOccurrenceTime(dateTime, event),
    timezone,
    timezoneLabel: formatTimeZoneLabel(timezone),
    sortTime: dateTime.toMillis(),
    dateKnown: true
  }
}

export function upcomingEventOccurrence(
  event: CalendarEvent,
  calendar: DiyanetCalendar,
  now = new Date()
): EventOccurrence | null {
  if (event.enabled === false) return null

  return event.calendar === 'diyanet'
    ? diyanetOccurrence(event, calendar, now)
    : gregorianOccurrence(event, now)
}

export function upcomingEventOccurrences(
  events: CalendarEvent[],
  calendar: DiyanetCalendar,
  now = new Date()
): EventOccurrence[] {
  return events
    .map((event) => upcomingEventOccurrence(event, calendar, now))
    .filter((entry): entry is EventOccurrence => entry !== null)
    .sort((a, b) =>
      a.sortTime - b.sortTime ||
      a.event.title.localeCompare(b.event.title)
    )
}

export function eventOccursToday(
  event: CalendarEvent,
  calendar: DiyanetCalendar,
  now = new Date()
): boolean {
  if (event.enabled === false) return false

  const timezone = eventTimezone(event)
  const todayKey = isoDateInZone(now, timezone)

  if (event.calendar === 'gregorian') {
    if (event.start?.trim()) {
      const start = DateTime.fromISO(event.start.trim(), {
        zone: timezone,
        setZone: true
      })
      return start.isValid &&
        start.setZone(timezone).toFormat('yyyy-LL-dd') === todayKey
    }

    return event.date === todayKey
  }

  const official = calendar.dates[todayKey]
  const fallback = formatIslamicFallback(now, timezone)
  const parsed = parseDiyanetDate(official || fallback)

  return Boolean(
    parsed &&
    event.hijriDay !== undefined &&
    event.hijriMonth &&
    parsed.day === event.hijriDay &&
    parsed.month === normalizeHijriMonth(event.hijriMonth)
  )
}
