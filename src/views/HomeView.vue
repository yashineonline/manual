<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useHomeClockData } from '../composables/useHomeClockData'
import {
  quranByLocale,
  quranTranslatorByLocale,
  quotesByLocale
} from '../lib/content'
import { dailyCycleIndex } from '../lib/daily'
import OrbitClock from '../components/OrbitClock.vue'

const { activeLocale } = useLocale()
const {
  now,
  selectedTimeZone,
  gregorianDay,
  gregorianDate,
  islamicDate,
  eventTitle
} = useHomeClockData()

const TEST_QUOTES_EVERY_MINUTE = false

const quote = computed(() => {
  const list = quotesByLocale.get(activeLocale.value) || []
  if (list.length === 0) {
    return null
  }

  const index = TEST_QUOTES_EVERY_MINUTE
    ? Math.floor(now.value.getTime() / 60_000) % list.length
    : dailyCycleIndex(
    list.length,
    now.value,
    selectedTimeZone.value,
    `quote:${activeLocale.value}`
  )

  console.info(
    `Loaded ${list.length} quotes:`,
    list.map((entry) => entry.id)
  )

  return list[index] || null

})

const verse = computed(() => {
  const list = quranByLocale.get(activeLocale.value) || []
  const index = dailyCycleIndex(
    list.length,
    now.value,
    selectedTimeZone.value,
    `quran:${activeLocale.value}`
  )

  return index >= 0 ? list[index] : null
})

const quranTranslator = computed(() =>
  quranTranslatorByLocale.get(activeLocale.value) ||
  quranTranslatorByLocale.get('en') ||
  ''
)
</script>

<template>
  <div class="home-page">
    <OrbitClock
      :gregorian-day="gregorianDay"
      :gregorian-date="gregorianDate"
      :islamic-date="islamicDate"
      :event-title="eventTitle"
    />

    <section
      v-if="quote"
      class="illuminated-panel quote-panel"
    >
      <span class="panel-number">01</span>
      <blockquote>{{ quote.text }}</blockquote>
      <cite class="quote-author">{{ quote.author }}</cite>
    </section>

    <section
      v-if="verse"
      class="illuminated-panel verse-panel"
    >
      <span class="panel-number">02</span>
      <blockquote>{{ verse.text }}</blockquote>
      <cite class="verse-source">
        <strong>{{ verse.sura }}:{{ verse.verse }}</strong>
        <span v-if="quranTranslator">
          Translated by {{ quranTranslator }}
        </span>
      </cite>
    </section>
  </div>
</template>
