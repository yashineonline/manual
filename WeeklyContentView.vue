<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import OrbitClock from '../components/OrbitClock.vue'
import { useHomeClockData } from '../composables/useHomeClockData'

interface WakeLockLike {
  released: boolean
  release: () => Promise<void>
  addEventListener: (
    type: 'release',
    listener: () => void
  ) => void
}

const {
  gregorianDay,
  gregorianDate,
  islamicDate,
  eventTitle
} = useHomeClockData()

const wakeLockActive = ref(false)
const wakeLockSupported =
  typeof navigator !== 'undefined' && 'wakeLock' in navigator
let wakeLock: WakeLockLike | null = null

async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.()
  } else {
    await document.exitFullscreen?.()
  }
}

async function toggleWakeLock() {
  if (!wakeLockSupported) return

  if (wakeLock) {
    await wakeLock.release()
    wakeLock = null
    wakeLockActive.value = false
    return
  }

  const wakeLockApi = (
    navigator as Navigator & {
      wakeLock: {
        request: (type: 'screen') => Promise<WakeLockLike>
      }
    }
  ).wakeLock

  wakeLock = await wakeLockApi.request('screen')
  wakeLockActive.value = true
  wakeLock.addEventListener('release', () => {
    wakeLock = null
    wakeLockActive.value = false
  })
}

onBeforeUnmount(() => {
  void wakeLock?.release()
})
</script>

<template>
  <main class="clock-display-page">
    <div class="clock-display-toolbar">
      <RouterLink class="outline-action" to="/clock-settings">
        ← Clock settings
      </RouterLink>

      <button
        type="button"
        class="outline-action"
        @click="toggleFullscreen"
      >
        Full screen
      </button>

      <button
        type="button"
        class="outline-action"
        :disabled="!wakeLockSupported"
        @click="toggleWakeLock"
      >
        {{
          wakeLockActive
            ? 'Allow screen to sleep'
            : 'Keep screen awake'
        }}
      </button>
    </div>

    <OrbitClock
      :gregorian-day="gregorianDay"
      :gregorian-date="gregorianDate"
      :islamic-date="islamicDate"
      :event-title="eventTitle"
    />

    <p v-if="!wakeLockSupported" class="clock-display-note">
      This browser does not provide the optional screen wake-lock feature.
    </p>
  </main>
</template>
