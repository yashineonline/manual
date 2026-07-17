<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLocale } from '../composables/useLocale'
import { weeklyEntries } from '../lib/content'
import type { WeeklyKind } from '../lib/types'

const route = useRoute()
const { activeLocale } = useLocale()
const kind = computed(() => route.params.kind as WeeklyKind)
const title = computed(() => kind.value.charAt(0).toUpperCase() + kind.value.slice(1))
const entry = computed(() => weeklyEntries.find((item) => item.locale === activeLocale.value && item.kind === kind.value))
</script>

<template>
  <section class="weekly-content page-enter">
    <header class="page-heading ornament-heading">
      <div><span v-if="entry" class="eyebrow">{{ entry.week }}</span><h1>{{ title }}</h1></div>
    </header>
    <article v-if="entry" class="markdown-sheet" v-html="entry.html"></article>
  </section>
</template>
