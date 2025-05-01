<script lang="ts" setup>
import type { StoreItem } from '@/shared/types/store'

const { data } = await useFetch('/api/store')

const selectedItem = useState<StoreItem | undefined>('selectedItem', () => undefined)
</script>

<template>
  <div>
    <div v-for="item in data?.items" :key="item.slug">
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
