<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { quranicOpeningsById } from '../data/quranicOpenings'
import { useOrbitClock } from '../composables/useOrbitClock'

const {
  settings,
  activeSequence,
  activeTimezone,
  timezoneLabel,
  setMode
} = useOrbitClock()

const now = ref(new Date())
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer !== undefined) {
    window.clearInterval(timer)
  }
})

const zonedParts = computed(() => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: activeTimezone.value,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).formatToParts(now.value)

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? ''

  const hour12 = Number(part('hour')) || 12
  const minute = Number(part('minute')) || 0
  const second = Number(part('second')) || 0
  const dayPeriod = part('dayPeriod').toLowerCase()

  return {
    hour12,
    minute,
    second,
    dayPeriod
  }
})

const timeDisplay = computed(() => {
  const { hour12, minute, dayPeriod } = zonedParts.value
  return `${hour12} : ${String(minute).padStart(2, '0')} ${dayPeriod}`
})

/*
 * The hour combination uses the current clock-hour position.
 *
 * 12 o'clock -> array index 0
 * 1 o'clock  -> array index 1
 * ...
 * 11 o'clock -> array index 11
 */
const hourPosition = computed(() => zonedParts.value.hour12 % 12)

/*
 * The minute combination uses the current completed five-minute sector.
 *
 * 00–04 minutes -> position 12/index 0
 * 05–09 minutes -> position 1
 * 10–14 minutes -> position 2
 * 15–19 minutes -> position 3
 * ...
 * 55–59 minutes -> position 11
 *
 * Therefore 4:15 gives:
 * combination at position 4 : combination at position 3
 */
const minutePosition = computed(() =>
  Math.floor(zonedParts.value.minute / 5)
)

const hourOpening = computed(() =>
  quranicOpeningsById.get(
    activeSequence.value[hourPosition.value] ?? 'none'
  )
)

const minuteOpening = computed(() =>
  quranicOpeningsById.get(
    activeSequence.value[minutePosition.value] ?? 'none'
  )
)

const combinationDisplay = computed(() => {
  const hourLabel =
    hourOpening.value?.id === 'none' ? '' : hourOpening.value?.label ?? ''

  const minuteLabel =
    minuteOpening.value?.id === 'none' ? '' : minuteOpening.value?.label ?? ''

  if (!hourLabel && !minuteLabel) {
    return ''
  }

  return `${hourLabel || '—'} : ${minuteLabel || '—'}`
})

const minuteAngle = computed(() => {
  const { minute, second } = zonedParts.value
  return minute * 6 + second * 0.1
})

const hourAngle = computed(() => {
  const { hour12, minute } = zonedParts.value
  return (hour12 % 12) * 30 + minute * 0.5
})

function positionStyle(index: number) {
  return {
    '--orbit-angle': `${index * 30}deg`
  }
}
</script>

<template>
  <section class="date-orbit orbit-clock" aria-label="AQRT orbit clock">
    <!-- Keep the existing 24-division ring -->
    <div class="orbit-rings" aria-hidden="true" />

    <!-- Twelve configurable combination positions -->
    <div class="orbit-combinations" aria-hidden="true">
      <span
        v-for="(openingId, index) in activeSequence"
        :key="`${index}-${openingId}`"
        class="orbit-combination-position"
        :style="positionStyle(index)"
        lang="ar"
        dir="rtl"
      >
        {{ quranicOpeningsById.get(openingId)?.arabic || '' }}
      </span>
    </div>

    <!-- Exact analog hands -->
    <div class="orbit-clock-hands" aria-hidden="true">
      <span
        class="orbit-hand orbit-hour-hand"
        :style="{ transform: `rotate(${hourAngle}deg)` }"
      />
      <span
        class="orbit-hand orbit-minute-hand"
        :style="{ transform: `rotate(${minuteAngle}deg)` }"
      />
      <span class="orbit-hand-pin" />
    </div>

    <div class="date-core orbit-clock-core">
      <small>{{ timezoneLabel }}</small>

      <time :datetime="now.toISOString()" class="orbit-time">
        {{ timeDisplay }}
      </time>

      <p v-if="combinationDisplay" class="orbit-current-combinations">
        {{ combinationDisplay }}
      </p>

      <p v-else class="orbit-current-combinations orbit-none-message">
        Choose combinations in Clock settings
      </p>

      <div class="date-divider" />

      <!--
        KEEP your existing Gregorian and Islamic date lines here.

        Move the same date markup that is currently inside .date-core
        into this position without changing its text or data bindings.
      -->
    </div>

    <div class="orbit-mode-switch" aria-label="Clock arrangement">
      <button
        type="button"
        :class="{ active: settings.mode === 'preset1' }"
        @click="setMode('preset1')"
      >
        Preset 1
      </button>

      <button
        type="button"
        :class="{ active: settings.mode === 'preset2' }"
        @click="setMode('preset2')"
      >
        Preset 2
      </button>

      <button
        type="button"
        :class="{ active: settings.mode === 'custom' }"
        @click="setMode('custom')"
      >
        Custom
      </button>
    </div>
  </section>
</template>
