<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { useSharedState } from '~/stores/useSharedState'

const {
  selectedItem,
  isItemsSearchActive,
  itemsSearch,
} = storeToRefs(useSharedState())

const { data } = useQuery({
  queryKey: ['items', { search: itemsSearch }],
  queryFn: () => $fetch(`/api/items?search=${itemsSearch.value}`),
})
</script>

<template>
  <div>
    <div v-if="isItemsSearchActive && !itemsSearch">
      recent search results
    </div>

    <div v-else>
      <div v-for="item in data?.items.slice(0, 50)" :key="item.slug">
        <NuxtLink
          :to="`/store/${item.slug}`"
          class="flex items-center py-2"
          @click="selectedItem = item"
        >
          <img class="ml-4 size-8 rounded-lg" :src="item.logoUrl">
          <span class="ml-4 grow text-lg font-semibold">{{ item.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
