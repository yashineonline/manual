import { ref } from 'vue'

const searchOpen = ref(false)

export function useSearchPanel() {
  return {
    searchOpen,
    openSearch: () => { searchOpen.value = true },
    closeSearch: () => { searchOpen.value = false }
  }
}
