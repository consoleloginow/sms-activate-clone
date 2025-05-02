<script lang="ts" setup>
import Items from '~/components/Items.vue'
import ItemsSearchResults from '~/components/ItemsSearchResults.vue'

const isItemsSearchFocused = useState('isItemsSearchFocused', () => false)
const itemsSearchQuery = useState<string>('itemsSearchQuery', () => '')
</script>

<template>
  <div>
    <div v-if="isItemsSearchFocused && !itemsSearchQuery">
      resent search results
    </div>

    <ItemsSearchResults v-if="itemsSearchQuery" />

    <Items v-if="!isItemsSearchFocused && !itemsSearchQuery" />
  </div>
</template>
