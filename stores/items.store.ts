export const useItemsStore = defineStore('items', () => {
  const {
    data,
    execute: fetch,
  } = useLazyFetch('/api/items', {
    key: 'items',
    immediate: false,
  })

  return {
    data,
    fetch,
  }
})
