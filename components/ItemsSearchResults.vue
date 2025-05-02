<script lang="ts" setup>
import type { StoreItem } from '~/shared/types/store'
import { useItemsSearchStore } from '~/stores/items-search.store'

const itemsSearchStore = useItemsSearchStore()

if (!itemsSearchStore.data) {
  await itemsSearchStore.fetch()
}

const selectedItem = useState<StoreItem | undefined>('selectedItem', () => undefined)
</script>

<template>
  <div>
    <div v-for="item in itemsSearchStore.data?.items" :key="item.slug">
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
</template>
