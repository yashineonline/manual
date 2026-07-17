<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { videos } from '../lib/content'

const { activeLocale } = useLocale()
const entries = computed(() => videos.filter((entry) => entry.locale === activeLocale.value))
</script>

<template>
  <section class="page-enter">
    <header class="page-heading ornament-heading">
      <div><span class="eyebrow">AQRT Manual</span><h1>Videos</h1></div>
    </header>
    <div class="link-ribbon-list">
      <a v-for="(entry, index) in entries" :key="entry.id" :href="entry.url" target="_blank" rel="noreferrer">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <strong>{{ entry.name }}</strong>
        <i aria-hidden="true">↗</i>
      </a>
    </div>
  </section>
</template>
