<script lang="ts" setup>
import type { StoreItem } from '~/shared/types/store'
import { useItemsStore } from '~/stores/items.store'

const itemsStore = useItemsStore()

if (!itemsStore.data) {
  await itemsStore.fetch()
}

const selectedItem = useState<StoreItem | undefined>('selectedItem', () => undefined)
</script>

<template>
  <div>
    <div v-for="item in itemsStore.data?.items" :key="item.slug">
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
