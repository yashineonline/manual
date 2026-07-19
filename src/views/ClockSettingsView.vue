<script setup lang="ts">
import {
  quranicOpenings,
  quranicOpeningsById,
  type QuranicOpeningId
} from '../data/quranicOpenings'
import {
  useOrbitClock,
  type EditableOrbitSequence,
  type OrbitCenterDisplay,
  type OrbitLabelMode,
  type OrbitMode,
  type OrbitRotationMode,
  type OrbitTimezoneMode
} from '../composables/useOrbitClock'
import {
  formatTimeZoneLabel,
  supportedTimeZones,
  type ClockTimeFormat
} from '../lib/timezones'

const {
  settings,
  localTimezone,
  maxSecondaryTimezones,
  setMode,
  setCenterDisplay,
  setOrbitLabelMode,
  setTimezoneMode,
  setOtherTimezone,
  setSecondaryTimeFormat,
  addSecondaryTimezone,
  updateSecondaryTimezone,
  removeSecondaryTimezone,
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

const timezoneOptions = supportedTimeZones()
const localTimezoneLabel = formatTimeZoneLabel(localTimezone)

function readSelect(event: Event): string {
  return (event.target as HTMLSelectElement).value
}

function updateMode(event: Event) {
  setMode(readSelect(event) as OrbitMode)
}

function updateCenterDisplay(event: Event) {
  setCenterDisplay(readSelect(event) as OrbitCenterDisplay)
}

function updateOrbitLabelMode(event: Event) {
  setOrbitLabelMode(readSelect(event) as OrbitLabelMode)
}

function updateTimezoneMode(event: Event) {
  setTimezoneMode(readSelect(event) as OrbitTimezoneMode)
}

function updateSecondaryTimeFormat(event: Event) {
  setSecondaryTimeFormat(readSelect(event) as ClockTimeFormat)
}

function updateRotationMode(event: Event) {
  setRotationMode(readSelect(event) as OrbitRotationMode)
}

function updateRotationSeconds(event: Event) {
  setRotationSeconds(
    Number((event.target as HTMLInputElement).value)
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
    readSelect(event) as QuranicOpeningId
  )
}

function selectedSuras(id: QuranicOpeningId) {
  return quranicOpeningsById.get(id)?.suras.join(', ') || ''
}

function sequenceTitle(sequence: EditableOrbitSequence) {
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

      <RouterLink class="outline-action" to="/clock-display">
        Open full-screen clock
      </RouterLink>
    </header>

    <div class="clock-settings-intro">
      <p>
        Position 12 is at the top. Positions 1–11 continue clockwise.
      </p>
      <p>
        At 5 : 20 pm, letter-time uses position 5 followed by
        position 4. When both positions contain the same combination,
        it is displayed once.
      </p>
    </div>

    <section class="clock-settings-card">
      <h2>Clock content</h2>

      <label class="clock-settings-field">
        <span>Active arrangement</span>
        <select :value="settings.mode" @change="updateMode">
          <option value="none">None</option>
          <option value="preset1">Preset 1</option>
          <option value="preset2">Preset 2</option>
          <option value="custom">Custom</option>
        </select>
      </label>

      <label class="clock-settings-field">
        <span>Main display inside the clock</span>
        <select
          :value="settings.centerDisplay"
          @change="updateCenterDisplay"
        >
          <option value="letters">Letter-time</option>
          <option value="12h">Normal time — 12 hour</option>
          <option value="24h">Normal time — 24 hour</option>
        </select>
        <small class="clock-setting-help">
          If the active arrangement is None, Letter-time falls back to
          24-hour time because no combinations are assigned.
        </small>
      </label>

      <label class="clock-settings-field">
        <span>Writing around the clock</span>
        <select
          :value="settings.orbitLabelMode"
          @change="updateOrbitLabelMode"
        >
          <option value="arabic">Arabic — الم</option>
          <option value="transliteration">
            Transliteration — Alif Lam Mim
          </option>
        </select>
      </label>
    </section>

    <section class="clock-settings-card">
      <h2>Primary timezone</h2>

      <label class="clock-settings-field">
        <span>Timezone used by the clock and daily content</span>
        <select
          :value="settings.timezoneMode"
          @change="updateTimezoneMode"
        >
          <option value="new-york">New York</option>
          <option value="local">
            {{ localTimezoneLabel }} — {{ localTimezone }}
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
          @change="
            setOtherTimezone(
              ($event.target as HTMLInputElement).value
            )
          "
        />
      </label>
    </section>

    <section class="clock-settings-card">
      <div class="clock-settings-card-heading">
        <div>
          <h2>Additional home-page timezones</h2>
          <p class="clock-card-description">
            Add up to three. They appear below the clock, one per line.
          </p>
        </div>

        <button
          type="button"
          class="outline-action"
          :disabled="
            settings.secondaryTimezones.length >=
            maxSecondaryTimezones
          "
          @click="addSecondaryTimezone"
        >
          Add timezone
        </button>
      </div>

      <label class="clock-settings-field">
        <span>Time format for additional timezones</span>
        <select
          :value="settings.secondaryTimeFormat"
          @change="updateSecondaryTimeFormat"
        >
          <option value="12h">12 hour</option>
          <option value="24h">24 hour</option>
        </select>
      </label>

      <div
        v-if="settings.secondaryTimezones.length"
        class="secondary-timezone-editor"
      >
        <article
          v-for="(entry, index) in settings.secondaryTimezones"
          :key="index"
          class="secondary-timezone-row"
        >
          <label class="clock-settings-field">
            <span>Label</span>
            <input
              :value="entry.label"
              placeholder="e.g. Istanbul"
              @change="
                updateSecondaryTimezone(index, {
                  label: ($event.target as HTMLInputElement).value
                })
              "
            />
          </label>

          <label class="clock-settings-field">
            <span>Timezone</span>
            <input
              :value="entry.timezone"
              list="aqrt-timezones"
              autocomplete="off"
              @change="
                updateSecondaryTimezone(index, {
                  timezone: ($event.target as HTMLInputElement).value
                })
              "
            />
          </label>

          <button
            type="button"
            class="outline-action secondary-timezone-remove"
            @click="removeSecondaryTimezone(index)"
          >
            Remove
          </button>
        </article>
      </div>

      <p v-else class="clock-empty-setting">
        No additional timezone is displayed on the home page.
      </p>
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
          <option value="clockwise">Clockwise</option>
          <option value="counterclockwise">Anticlockwise</option>
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
          {{ settings.rotationSeconds }} seconds. Lower is faster.
        </small>
      </label>
    </section>

    <datalist id="aqrt-timezones">
      <option
        v-for="timezone in timezoneOptions"
        :key="timezone"
        :value="timezone"
      />
    </datalist>

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
              selectedSuras(settings[sequenceName][index]) ||
              'No combination at this position'
            }}
          </small>
        </label>
      </div>
    </section>
  </section>
</template>
