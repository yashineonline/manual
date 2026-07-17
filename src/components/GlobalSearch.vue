<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { searchContent } from '../composables/useSearch'
import { useLocale } from '../composables/useLocale'
import { useSearchPanel } from '../composables/useSearchPanel'

const query = ref('')
const input = ref<HTMLInputElement | null>(null)
const router = useRouter()
const { activeLocale } = useLocale()
const { searchOpen, closeSearch } = useSearchPanel()
const results = computed(() => searchContent(query.value, activeLocale.value))

watch(searchOpen, async (open) => {
  if (open) {
    query.value = ''
    await nextTick()
    input.value?.focus()
  }
})

function choose(route: string) {
  closeSearch()
  void router.push(route)
}
</script>

<template>
  <Teleport to="body">
    <div v-if="searchOpen" class="search-veil" role="dialog" aria-modal="true" aria-label="Search" @click.self="closeSearch">
      <section class="search-panel">
        <div class="search-field-wrap">
          <span class="search-glyph" aria-hidden="true">⌕</span>
          <input
            ref="input"
            v-model="query"
            class="search-field"
            type="search"
            placeholder="Search"
            autocomplete="off"
            @keydown.esc="closeSearch"
          />
          <button class="round-button" type="button" aria-label="Close" @click="closeSearch">×</button>
        </div>

        <div class="search-results">
          <button
            v-for="result in results"
            :key="result.id"
            class="search-result"
            type="button"
            @click="choose(result.route)"
          >
            <span class="search-result-type">{{ result.type }}</span>
            <strong>{{ result.title }}</strong>
            <span>{{ result.snippet }}</span>
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>
