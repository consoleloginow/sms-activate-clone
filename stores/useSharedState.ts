import type { StoreCountry, StoreItem } from '~/shared/types/store'
import { defineStore } from 'pinia'

export const useSharedState = defineStore('SharedState', () => {
  const selectedItem = ref<StoreItem>()
  const selectedCountry = ref<StoreCountry>()

  const isItemsSearchActive = ref(false)

  const itemsSearch = ref('')
  const countriesSearch = ref('')

  return {
    selectedItem,
    selectedCountry,
    isItemsSearchActive,
    itemsSearch,
    countriesSearch,
  }
})
