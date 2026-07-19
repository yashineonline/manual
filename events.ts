import { computed, onBeforeUnmount, ref } from 'vue'
import { useTimeZone } from './useTimeZone'
import { diyanetCalendar, events } from '../lib/content'
import {
  dateInTimeZone,
  formatGregorianDate,
  formatGregorianDay,
  getDiyanetDate
} from '../lib/dates'
import { eventOccursToday } from '../lib/events'

export function useHomeClockData() {
  const { selectedTimeZone } = useTimeZone()
  const now = ref(new Date())
  const timer = window.setInterval(() => {
    now.value = new Date()
  }, 60_000)

  onBeforeUnmount(() => {
    window.clearInterval(timer)
  })

  const selectedCalendarDate = computed(() =>
    dateInTimeZone(now.value, selectedTimeZone.value)
  )

  const gregorianDay = computed(() =>
    formatGregorianDay(selectedCalendarDate.value)
  )

  const gregorianDate = computed(() =>
    formatGregorianDate(selectedCalendarDate.value)
  )

  const islamicDate = computed(() =>
    getDiyanetDate(
      diyanetCalendar,
      selectedCalendarDate.value
    ).value
  )

  const todaysEvents = computed(() =>
    events.filter((event) =>
      eventOccursToday(event, diyanetCalendar, now.value)
    )
  )

  const eventTitle = computed(() =>
    todaysEvents.value[0]?.title || ''
  )

  return {
    now,
    selectedTimeZone,
    selectedCalendarDate,
    gregorianDay,
    gregorianDate,
    islamicDate,
    todaysEvents,
    eventTitle
  }
}
