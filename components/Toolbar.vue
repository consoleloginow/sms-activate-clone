<script lang="ts" setup>
import { useSharedState } from '~/stores/useSharedState'

const route = useRoute()

const {
  isItemsSearchActive,
  itemsSearch,
  countriesSearch,
} = storeToRefs(useSharedState())
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-muted p-4 shadow">
    <input
      v-if="route.name === 'index'"
      v-model="itemsSearch"
      type="search"
      placeholder="Search items..."
      class="w-full bg-background border p-2 rounded-xl mb-4"
      @focusin="isItemsSearchActive = true"
      @focusout="isItemsSearchActive = false"
    >
    <div v-if="route.name === 'store-item'" class="flex items-center">
      <input
        v-model="countriesSearch"
        type="search"
        placeholder="Search countries..."
        class="w-full bg-background border p-2 rounded mb-4"
      >
      <button>sort</button>
    </div>
  </div>
</template>
