<script lang="ts" setup>
import Items from '~/components/Items.vue'
import ItemsSearchResults from '~/components/ItemsSearchResults.vue'
import { useSharedState } from '~/stores/useSharedState'

const {
  isItemsSearchActive,
  itemsSearch,
} = storeToRefs(useSharedState())
</script>

<template>
  <div>
    <Items v-if="!isItemsSearchActive && !itemsSearch" />

    <div v-if="isItemsSearchActive && !itemsSearch">
      recent search results
    </div>

    <ItemsSearchResults v-if="itemsSearch" />
  </div>
</template>
