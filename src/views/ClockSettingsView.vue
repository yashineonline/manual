<script setup lang="ts">
import { computed } from 'vue'
import {
  quranicOpenings,
  quranicOpeningsById,
  type QuranicOpeningId
} from '../data/quranicOpenings'
import {
  useOrbitClock,
  type EditableOrbitSequence,
  type OrbitMode,
  type OrbitRotationMode,
  type OrbitTimezoneMode
} from '../composables/useOrbitClock'

const {
  settings,
  localTimezone,
  setMode,
  setTimezoneMode,
  setOtherTimezone,
  setRotationMode,
  setRotationSeconds,
  setSequencePosition,
  resetSequence
} = useOrbitClock()

const positions = [
  '12 o’clock',
  '1 o’clock',
  '2 o’clock',
  '3 o’clock',
  '4 o’clock',
  '5 o’clock',
  '6 o’clock',
  '7 o’clock',
  '8 o’clock',
  '9 o’clock',
  '10 o’clock',
  '11 o’clock'
]

const editableSequences: EditableOrbitSequence[] = [
  'preset1',
  'preset2',
  'custom'
]

const timezoneOptions = computed(() => {
  const intl = Intl as typeof Intl & {
    supportedValuesOf?: (key: 'timeZone') => string[]
  }

  if (typeof intl.supportedValuesOf === 'function') {
    return intl.supportedValuesOf('timeZone')
  }

  return [
    'America/New_York',
    'America/Toronto',
    'Europe/London',
    'Europe/Paris',
    'Europe/Istanbul',
    'Indian/Mauritius',
    'Asia/Dubai',
    'Asia/Karachi',
    'Asia/Kolkata',
    'Asia/Kuala_Lumpur',
    'Asia/Tokyo',
    'Australia/Sydney'
  ]
})

function updateMode(event: Event) {
  setMode((event.target as HTMLSelectElement).value as OrbitMode)
}

function updateTimezoneMode(event: Event) {
  setTimezoneMode(
    (event.target as HTMLSelectElement).value as OrbitTimezoneMode
  )
}

function updateRotationMode(event: Event) {
  setRotationMode(
    (event.target as HTMLSelectElement)
      .value as OrbitRotationMode
  )
}

function updateRotationSeconds(event: Event) {
  setRotationSeconds(
    Number(
      (event.target as HTMLInputElement).value
    )
   )
 }


function updateOpening(
  sequence: EditableOrbitSequence,
  position: number,
  event: Event
) {
  setSequencePosition(
    sequence,
    position,
    (event.target as HTMLSelectElement).value as QuranicOpeningId
  )
}

function selectedSuras(id: QuranicOpeningId) {
  return quranicOpeningsById.get(id)?.suras.join(', ') || ''
}

function sequenceTitle(
  sequence: EditableOrbitSequence
) {
  if (sequence === 'preset1') return 'Preset 1'
  if (sequence === 'preset2') return 'Preset 2'
  return 'Custom'
 }  
</script>

<template>
  <section class="clock-settings-page page-enter">
    <header class="page-heading ornament-heading">
      <div>
        <span class="eyebrow">AQRT Manual</span>
        <h1>Clock settings</h1>
      </div>
    </header>

    <div class="clock-settings-intro">
      <p>
        Position 12 is the top of the orbit. The sequence then continues
        clockwise through positions 1 to 11.
      </p>
      <p>
        At 4 : 15 pm, the clock displays the combination at position 4,
        followed by the combination at position 3.
        None hides the Arabic combinations and
        displays the time in 24-hour format.
      </p>
    </div>

    <section class="clock-settings-card">
      <h2>Active arrangement</h2>

      <label class="clock-settings-field">
        <span>Arrangement</span>
        <select :value="settings.mode" @change="updateMode">
          <option value="none">None</option>
          <option value="preset1">Preset 1</option>
          <option value="preset2">Preset 2</option>
          <option value="custom">Custom</option>
        </select>
      </label>
    </section>

    <section class="clock-settings-card">
      <h2>Timezone</h2>

      <label class="clock-settings-field">
        <span>Time source</span>
        <select :value="settings.timezoneMode" @change="updateTimezoneMode">
          <option value="new-york">New York</option>
          <option value="local">
            Local device time — {{ localTimezone }}
          </option>
          <option value="other">Another timezone</option>
        </select>
      </label>

      <label
        v-if="settings.timezoneMode === 'other'"
        class="clock-settings-field"
      >
        <span>Timezone</span>

        <input
          :value="settings.otherTimezone"
          list="aqrt-timezones"
          autocomplete="off"
          @change="setOtherTimezone(($event.target as HTMLInputElement).value)"
        />

        <datalist id="aqrt-timezones">
          <option
            v-for="timezone in timezoneOptions"
            :key="timezone"
            :value="timezone"
          />
        </datalist>
      </label>
    </section>

        <section class="clock-settings-card">
      <h2>Circle movement</h2>

      <label class="clock-settings-field">
        <span>Direction</span>
        <select
          :value="settings.rotationMode"
          @change="updateRotationMode"
        >
          <option value="static">Static</option>
          <option value="clockwise">
            Clockwise
          </option>
          <option value="counterclockwise">
            Anticlockwise
          </option>
        </select>
      </label>

      <label
        v-if="settings.rotationMode !== 'static'"
        class="clock-settings-field"
      >
        <span>Seconds per full turn</span>

        <div class="clock-speed-control">
          <input
            type="range"
            min="10"
            max="180"
            step="5"
            :value="settings.rotationSeconds"
            @input="updateRotationSeconds"
          />

          <input
            type="number"
            min="10"
            max="180"
            step="5"
            :value="settings.rotationSeconds"
            @change="updateRotationSeconds"
          />
        </div>

        <small class="clock-setting-help">
          {{ settings.rotationSeconds }} seconds.
          A lower number turns faster.
        </small>
      </label>
    </section>
    

    <section
      v-for="sequenceName in editableSequences"
      :key="sequenceName"
      class="clock-settings-card"
    >
      <div class="clock-settings-card-heading">
        <h2>{{ sequenceTitle(sequenceName) }}</h2>

        <button
          type="button"
          class="outline-action"
          @click="resetSequence(sequenceName)"
        >
          Clear all
        </button>
      </div>

      <div class="orbit-position-editor">
        <label
          v-for="(positionLabel, index) in positions"
          :key="`${sequenceName}-${index}`"
          class="orbit-position-row"
        >
          <span class="orbit-position-number">
            {{ positionLabel }}
          </span>

          <select
            :value="settings[sequenceName][index]"
            @change="updateOpening(sequenceName, index, $event)"
          >
            <option
              v-for="opening in quranicOpenings"
              :key="opening.id"
              :value="opening.id"
            >
              {{
                opening.id === 'none'
                  ? 'None'
                  : `${opening.arabic} — ${opening.label}`
              }}
            </option>
          </select>

          <small>
            {{
              selectedSuras(settings[sequenceName][index])
                || 'No combination at this position'
            }}
          </small>
        </label>
      </div>
    </section>
  </section>
</template>
