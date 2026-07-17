import { computed, ref } from 'vue'
import { availableLocales } from '../lib/content'
import type { LocaleCode } from '../lib/types'

const activeLocale = ref<LocaleCode>('en')
const locales = computed(() => availableLocales())

export function useLocale() {
  function setLocale(locale: LocaleCode) {
    if (locales.value.includes(locale)) activeLocale.value = locale
  }

  return { activeLocale, locales, setLocale }
}
