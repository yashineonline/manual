<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../composables/useLocale'
import { manualPages, tocByLocale } from '../lib/content'
import type { ManualTocEntry } from '../lib/types'
import { RouterLink, useRouter } from 'vue-router'
import {
  manualLogicalChapters,
  manualSectionRoute,
  randomManualSubcontent
} from '../lib/manualChapters'

const router = useRouter()
const suggestion = ref<ReturnType<typeof randomManualSubcontent>>(null)
const previousSuggestionKey = ref<string>()

function chooseReading() {
  suggestion.value = randomManualSubcontent(previousSuggestionKey.value)

  if (suggestion.value) {
    previousSuggestionKey.value =
      `${suggestion.value.chapterId}/${suggestion.value.sectionId}`
  }
}

function openSuggestion() {
  if (!suggestion.value) return

  if (suggestion.value.chapterRoute) {
    void router.push(suggestion.value.chapterRoute)
    return
  }

  void router.push(
    manualSectionRoute(
      suggestion.value.chapterId,
      suggestion.value.sectionId
    )
  )
}


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
    <section class="manual-logical-index page-enter">
    <header class="page-heading ornament-heading manual-logical-heading">
      <div>
        <h1>AQRT Manual</h1>
      </div>

      <button
        type="button"
        class="gold-action"
        @click="chooseReading"
      >
        What to Read
      </button>
    </header>

    <section
      v-if="suggestion"
      class="manual-reading-suggestion"
      aria-live="polite"
    >
      <div>
        <span class="eyebrow">Suggested Reading</span>
        <h2>{{ suggestion.chapterTitle }}</h2>
        <p>{{ suggestion.sectionTitle }}</p>
        <small>
          Source pages
          {{ suggestion.sourcePages[0] }}–{{ suggestion.sourcePages[1] }}
        </small>
      </div>

      <div class="manual-reading-suggestion-actions">
        <button type="button" class="gold-action" @click="openSuggestion">
          Read This
        </button>
        <button type="button" class="outline-action" @click="chooseReading">
          Choose Another
        </button>
      </div>
    </section>

    <div class="manual-chapter-grid">
      <article
        v-for="(chapter, chapterIndex) in manualLogicalChapters"
        :key="chapter.id"
        class="manual-chapter-card"
      >
        <header>
          <span>
            {{ String(chapterIndex + 1).padStart(2, '0') }}
          </span>

          <div>
            <h2>{{ chapter.title }}</h2>
            <small>
              Source pages {{ chapter.pages[0] }}–{{ chapter.pages[1] }}
            </small>
          </div>
        </header>

        <nav :aria-label="`${chapter.title} subcontents`">
          <RouterLink
            v-for="section in chapter.blocks"
            :key="section.id"
            :to="
              chapter.route ||
              manualSectionRoute(chapter.id, section.id)
            "
          >
            <span>{{ section.title }}</span>
            <i aria-hidden="true">→</i>
          </RouterLink>
        </nav>

        <RouterLink
          class="manual-open-chapter"
          :to="
            chapter.route ||
            manualSectionRoute(chapter.id)
          "
        >
          {{
            chapter.route
              ? 'Open dedicated page'
              : 'Read complete chapter'
          }}
          <span aria-hidden="true">→</span>
        </RouterLink>
      </article>
    </div>
  </section>
 
</template>
