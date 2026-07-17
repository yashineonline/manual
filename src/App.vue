<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppShell from './components/AppShell.vue'

const route = useRoute()
const printMode = computed(() => route.meta.print === true)
</script>

<template>
  <RouterView v-if="printMode" />
  <AppShell v-else />
</template>
