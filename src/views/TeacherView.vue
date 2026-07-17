<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTeacher } from '../composables/useTeacher'
import { renderMarkdown } from '../lib/markdown'

const password = ref('')
const email = ref('')
const openId = ref<string | null>(null)
const {
  configured,
  emailConfigured,
  loading,
  error,
  authenticated,
  entries,
  unlock,
  lock
} = useTeacher()

const renderedEntries = computed(() => entries.value.map((entry) => ({
  ...entry,
  html: renderMarkdown(entry.body)
})))

async function submit() {
  const ok = await unlock(password.value, email.value || undefined)
  if (ok) password.value = ''
}
</script>

<template>
  <section class="teacher-page page-enter">
    <header class="page-heading ornament-heading">
      <div><span class="eyebrow">AQRT Manual</span><h1>Teacher's Corner</h1></div>
      <button v-if="authenticated" class="outline-action" type="button" @click="lock">Lock</button>
    </header>

    <form v-if="!authenticated" class="lock-gate" @submit.prevent="submit">
      <div class="gate-symbol" aria-hidden="true">⌑</div>
      <input v-if="!emailConfigured" v-model="email" type="email" autocomplete="username" placeholder="Email" required />
      <input v-model="password" type="password" autocomplete="current-password" placeholder="Password" required />
      <button class="gold-action" type="submit" :disabled="loading || !configured">Unlock</button>
      <span v-if="error" class="form-status">{{ error }}</span>
    </form>

    <div v-else class="teacher-ledger">
      <article v-for="entry in renderedEntries" :key="entry.id" :class="{ open: openId === entry.id }">
        <button type="button" @click="openId = openId === entry.id ? null : entry.id">
          <span>{{ entry.category || 'Teacher' }}</span>
          <strong>{{ entry.title }}</strong>
          <i aria-hidden="true">{{ openId === entry.id ? '−' : '+' }}</i>
        </button>
        <div v-if="openId === entry.id" class="markdown-sheet" v-html="entry.html"></div>
      </article>
    </div>
  </section>
</template>
