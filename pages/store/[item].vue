<script lang="ts" setup>
import type { StoreItem } from '@/shared/types/store'
import { X } from 'lucide-vue-next'

const route = useRoute()

const { data } = await useFetch(() => `/api/store/${route.params.item}`)

const selectedItem = useState<StoreItem | undefined>('selectedItem', () => data.value!.item!)
</script>

<template>
  <div class="relative">
    <div class="sticky top-2 m-2 p-2 flex items-center rounded-xl bg-muted">
      <img class="size-8 rounded-lg" :src="selectedItem?.logoUrl">
      <span class="grow mx-2 text-lg font-semibold">{{ selectedItem?.name }}</span>
      <NuxtLink to="/" @click="() => { selectedItem = undefined }">
        <X class="size-5" />
      </NuxtLink>
    </div>
    <div v-for="country in data?.countries" :key="country.code">
      <div class="flex items-center py-2">
        <img class="ml-4 size-8 rounded-lg" :src="country.flagUrl">
        <div class="ml-4 grow">
          <div class="leading-none font-semibold">
            {{ country.name }}
          </div>
          <div class="text-xs">
            {{ country.count }} шт.
          </div>
        </div>
        <span class="mr-4">${{ country.price }}</span>
      </div>
    </div>
  </div>
</template>
