export const useItemsSearchStore = defineStore('items-search', () => {
  const searchQuery = ref('')

  const {
    data,
    execute: fetch,
  } = useLazyFetch('/api/items', {
    key: 'items-search',
    immediate: false,
    query: {
      search: searchQuery,
    },
  })

  return {
    searchQuery,
    data,
    fetch,
  }
})
