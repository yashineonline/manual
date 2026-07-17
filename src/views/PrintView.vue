<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { manualPages } from '../lib/content'

const route = useRoute()
const selected = computed(() => {
  const value = Array.isArray(route.query.pages) ? route.query.pages[0] : route.query.pages
  return String(value || '')
    .split(',')
    .map((entry) => Number(entry))
    .filter((entry) => Number.isInteger(entry) && entry > 0)
})
const pages = computed(() => manualPages.filter((page) => page.locale === 'en' && selected.value.includes(page.page)))

onMounted(async () => {
  await nextTick()
  window.setTimeout(() => window.print(), 350)
})
</script>

<template>
  <main class="print-document">
    <article v-for="page in pages" :key="page.page" class="print-page">
      <header><span>AQRT Manual</span><strong>{{ page.page }}</strong></header>
      <h1>{{ page.title }}</h1>
      <div>{{ page.text }}</div>
    </article>
  </main>
</template>
