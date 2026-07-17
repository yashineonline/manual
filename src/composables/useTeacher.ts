import { computed, onMounted, ref } from 'vue'
import { supabase } from '../lib/supabase'
import type { TeacherContent } from '../lib/types'

const loading = ref(false)
const error = ref('')
const sessionReady = ref(false)
const authenticated = ref(false)
const entries = ref<TeacherContent[]>([])

async function refreshSession() {
  if (!supabase) {
    sessionReady.value = true
    authenticated.value = false
    return
  }
  const { data } = await supabase.auth.getSession()
  authenticated.value = Boolean(data.session)
  sessionReady.value = true
  if (authenticated.value) await loadEntries()
}

async function loadEntries() {
  if (!supabase) return
  loading.value = true
  error.value = ''
  const { data, error: queryError } = await supabase
    .from('teacher_content')
    .select('id,title,slug,body,category,sort_order,published_at')
    .order('sort_order', { ascending: true })
    .order('published_at', { ascending: false })
  if (queryError) error.value = queryError.message
  entries.value = (data || []) as TeacherContent[]
  loading.value = false
}

export function useTeacher() {
  onMounted(() => {
    if (!sessionReady.value) void refreshSession()
  })

  async function unlock(password: string, email?: string) {
    error.value = ''
    if (!supabase) {
      error.value = 'Supabase'
      return false
    }
    const loginEmail = email || (import.meta.env.VITE_TEACHER_EMAIL as string | undefined)
    if (!loginEmail) {
      error.value = 'Email'
      return false
    }
    loading.value = true
    const { error: authError } = await supabase.auth.signInWithPassword({ email: loginEmail, password })
    loading.value = false
    if (authError) {
      error.value = authError.message
      return false
    }
    authenticated.value = true
    await loadEntries()
    return true
  }

  async function lock() {
    if (supabase) await supabase.auth.signOut()
    authenticated.value = false
    entries.value = []
  }

  return {
    configured: computed(() => Boolean(supabase)),
    emailConfigured: computed(() => Boolean(import.meta.env.VITE_TEACHER_EMAIL)),
    loading,
    error,
    sessionReady,
    authenticated,
    entries,
    unlock,
    lock,
    loadEntries
  }
}
