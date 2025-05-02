<script lang="ts" setup>
const route = useRoute()

const isItemsSearchFocused = useState('isItemsSearchFocused', () => false)
const isCountriesSearchFocused = useState('isCountriesSearchFocused', () => false)

const itemsSearchQuery = useState<string>('itemsSearchQuery', () => '')
const countriesSearchQuery = useState<string>('countriesSearchQuery', () => '')
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-muted p-4 shadow">
    <input
      v-if="route.name === 'index'"
      v-model="itemsSearchQuery"
      type="search"
      placeholder="Search items..."
      class="w-full bg-background border p-2 rounded-xl mb-4"
      @focusin="isItemsSearchFocused = true"
      @focusout="isItemsSearchFocused = false"
    >
    <div v-if="route.name === 'store-item'" class="flex items-center">
      <input
        v-model="countriesSearchQuery"
        type="search"
        placeholder="Search countries..."
        class="w-full bg-background border p-2 rounded mb-4"
        @focusin="isCountriesSearchFocused = true"
        @focusout="isCountriesSearchFocused = false"
      >
      <button>sort</button>
    </div>
  </div>
</template>
