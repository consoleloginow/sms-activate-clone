<script lang="ts" setup>
import Items from '~/components/Items.vue'
import ItemsSearchResults from '~/components/ItemsSearchResults.vue'
import { useItemsSearchStore } from '~/stores/items-search.store'

const itemsSearchStore = useItemsSearchStore()

const isItemsSearchFocused = useState('isItemsSearchFocused', () => false)
</script>

<template>
  <div>
    <div v-if="isItemsSearchFocused && !itemsSearchStore.searchQuery">
      resent search results
    </div>

    <ItemsSearchResults v-if="itemsSearchStore.searchQuery" />

    <Items v-if="!isItemsSearchFocused && !itemsSearchStore.searchQuery" />
  </div>
</template>
