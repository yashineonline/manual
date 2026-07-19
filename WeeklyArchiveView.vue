<script setup lang="ts">
import { activities } from '../lib/content'
</script>

<template>
  <section class="page-enter">
    <header class="page-heading ornament-heading">
      <div>
        <span class="eyebrow">AQRT Manual</span>
        <h1>Weekly Activities</h1>
      </div>
    </header>

    <div class="activity-grid">
      <RouterLink class="activity-events-card" to="/activities/events">
        <span>Calendar</span>
        <strong>Upcoming Events</strong>
        <i aria-hidden="true">→</i>
      </RouterLink>

      <a
        v-for="(entry, index) in activities"
        :key="`${entry.week}-${index}`"
        :href="entry.url"
        target="_blank"
        rel="noreferrer"
      >
        <span>{{ entry.week }}</span>
        <strong>{{ entry.title }}</strong>
        <i aria-hidden="true">↗</i>
      </a>
    </div>
  </section>
</template>
