<script setup lang="ts">
import { ref } from 'vue'

const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined
const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')
const sending = ref(false)

async function submit() {
  if (!endpoint) return
  sending.value = true
  status.value = ''
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value, source: 'AQRT Manual' })
    })
    if (!response.ok) throw new Error(String(response.status))
    name.value = ''
    email.value = ''
    message.value = ''
    status.value = 'Sent'
  } catch (error) {
    status.value = error instanceof Error ? error.message : 'Error'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="contact-page page-enter">
    <header class="page-heading ornament-heading">
      <div><span class="eyebrow">AQRT Manual</span><h1>Contact</h1></div>
    </header>

    <form class="contact-form" @submit.prevent="submit">
      <label><span>Name</span><input v-model="name" name="name" type="text" autocomplete="name" required /></label>
      <label><span>Email</span><input v-model="email" name="email" type="email" autocomplete="email" required /></label>
      <label class="message-field"><span>Query</span><textarea v-model="message" name="message" rows="8" required></textarea></label>
      <button class="gold-action" type="submit" :disabled="sending || !endpoint">Send</button>
      <span v-if="status" class="form-status">{{ status }}</span>
    </form>
  </section>
</template>
