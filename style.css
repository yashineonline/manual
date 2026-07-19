<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppShell from './components/AppShell.vue'

const route = useRoute()
const standaloneMode = computed(() =>
  route.meta.print === true || route.meta.standalone === true
)
</script>

<template>
  <RouterView v-if="standaloneMode" />
  <AppShell v-else />
</template>
