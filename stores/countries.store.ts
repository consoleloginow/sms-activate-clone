export const useCountriesStore = defineStore('countries', () => {
  const selectedItem = useState<StoreItem | undefined>('selectedItem', () => undefined)

  const searchQuery = ref('')

  const {
    data,
    execute: fetch,
  } = useLazyFetch(() => `/api/items/${selectedItem.value?.slug}/countries`, {
    key: 'countries',
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
