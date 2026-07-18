<script setup lang="ts">
import { computed, ref } from 'vue'
import { glossaryById } from '../lib/content'
import { parseGlsText } from '../lib/gls'
import type { GlossaryEntry } from '../lib/types'

const props = defineProps<{
  text: string
}>()

const segments = computed(() => parseGlsText(props.text))
const activeEntry = ref<GlossaryEntry | null>(null)

function openEntry(id: string) {
  activeEntry.value = glossaryById.get(id) || null
}

function closeEntry() {
  activeEntry.value = null
}
</script>

<template>
  <span class="gls-text">
    <template v-for="(segment, index) in segments" :key="index">
      <template v-if="segment.type === 'text'">{{ segment.text }}</template>

      <button
        v-else-if="glossaryById.has(segment.id)"
        class="gls-term"
        type="button"
        @click="openEntry(segment.id)"
      >{{ segment.label || glossaryById.get(segment.id)?.term }}</button>

      <template v-else>{{ segment.label || segment.id }}</template>
    </template>
  </span>

  <Teleport to="body">
    <div
      v-if="activeEntry"
      class="gls-overlay"
      role="presentation"
      @click.self="closeEntry"
    >
      <section
        class="gls-popover"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`gls-title-${activeEntry.id}`"
      >
        <button class="gls-close" type="button" aria-label="Close" @click="closeEntry">×</button>
        <span class="eyebrow">Glossary</span>
        <h2 :id="`gls-title-${activeEntry.id}`">{{ activeEntry.term }}</h2>
        <p>{{ activeEntry.description }}</p>
        <RouterLink
          class="outline-action"
          :to="{
            path: '/glossary',
            query: {
              category: activeEntry.category,
              entry: activeEntry.id
            }
          }"
          @click="closeEntry"
        >Open in Glossary</RouterLink>
      </section>
    </div>
  </Teleport>
</template>
