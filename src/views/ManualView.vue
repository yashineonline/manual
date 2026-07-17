<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../composables/useLocale'
import { manualPages, tocByLocale } from '../lib/content'
import type { ManualTocEntry } from '../lib/types'

const { activeLocale } = useLocale()
const selectedIds = ref<string[]>([])

const toc = computed(() => tocByLocale.get(activeLocale.value) || [])
const pageCount = computed(() => manualPages.filter((page) => page.locale === activeLocale.value).length)

function routeFor(entry: ManualTocEntry): string {
  return entry.id === 'allahs-99-beautiful-names' ? '/names' : `/manual/page/${entry.page}`
}

function rangeFor(entry: ManualTocEntry): number[] {
  const starts = [...new Set(toc.value.map((item) => item.page))].sort((a, b) => a - b)
  const next = starts.find((start) => start > entry.page) || pageCount.value + 1
  return Array.from({ length: Math.max(1, next - entry.page) }, (_, index) => entry.page + index)
}

const selectedPages = computed(() => {
  const pages = new Set<number>()
  for (const id of selectedIds.value) {
    const entry = toc.value.find((item) => item.id === id)
    if (entry) rangeFor(entry).forEach((page) => pages.add(page))
  }
  return [...pages].sort((a, b) => a - b)
})

function openPdf() {
  if (!selectedPages.value.length) return
  const query = encodeURIComponent(selectedPages.value.join(','))
  window.open(`${window.location.origin}${window.location.pathname}#/print?pages=${query}`, '_blank', 'noopener')
}

function selectAll() {
  selectedIds.value = selectedIds.value.length === toc.value.length ? [] : toc.value.map((entry) => entry.id)
}
</script>

<template>
  <section class="manual-index page-enter">
    <header class="page-heading ornament-heading">
      <div>
        <span class="eyebrow">AQRT Manual</span>
        <h1>Table of Contents</h1>
      </div>
      <div class="heading-actions">
        <button class="outline-action" type="button" @click="selectAll">All</button>
        <button class="gold-action" type="button" :disabled="!selectedPages.length" @click="openPdf">PDF</button>
      </div>
    </header>

    <div class="toc-grid">
      <article v-for="(entry, index) in toc" :key="entry.id" class="toc-card">
        <label class="toc-check">
          <input v-model="selectedIds" type="checkbox" :value="entry.id" />
          <span aria-hidden="true"></span>
        </label>
        <RouterLink :to="routeFor(entry)" class="toc-link">
          <span class="toc-ordinal">{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ entry.title }}</strong>
          <span class="toc-page">{{ entry.displayPage }}</span>
        </RouterLink>
      </article>
    </div>
  </section>
</template>
