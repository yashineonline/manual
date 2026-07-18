<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { weeklyEntries } from '../lib/content'

const { activeLocale } = useLocale()

const latest = computed(() => weeklyEntries.find((entry) =>
  entry.locale === activeLocale.value && entry.published
))
</script>

<template>
  <section class="weekly-hub page-enter">
    <div class="weekly-emblem" aria-hidden="true">Ⅶ</div>
    <span v-if="latest" class="eyebrow">{{ latest.title }}</span>
    <h1>Weekly</h1>

    <nav class="weekly-doors">
      <RouterLink to="/weekly/reading">Reading</RouterLink>
      <RouterLink to="/weekly/contemplation">Contemplation</RouterLink>
      <RouterLink to="/weekly/assignment">Assignment</RouterLink>
      <RouterLink class="weekly-archive-door" to="/weekly/archive">Archive</RouterLink>
    </nav>
  </section>
</template>
