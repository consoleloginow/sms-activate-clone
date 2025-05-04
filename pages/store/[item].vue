<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { X } from 'lucide-vue-next'
import { useSharedState } from '~/stores/useSharedState'

const {
  selectedItem,
  selectedCountry,
  countriesSearch,
} = storeToRefs(useSharedState())

const route = useRoute()

const { data } = useQuery({
  queryKey: ['items', route.params.item, { search: countriesSearch }],
  queryFn: () => $fetch(`/api/items/${route.params.item}/countries?search=${countriesSearch.value}`),
})

const item = computed(() => data.value?.item ?? selectedItem.value)

syncRefs(item, selectedItem)
</script>

<template>
  <div class="relative">
    <div v-if="item" class="sticky top-2 m-2 p-2 flex items-center rounded-xl bg-muted">
      <img class="size-8 rounded-lg" :src="item.logoUrl">
      <span class="grow mx-2 text-lg font-semibold">{{ item.name }}</span>
      <NuxtLink to="/" @click="() => { selectedItem = undefined }">
        <X class="size-5" />
      </NuxtLink>
    </div>

    <div v-if="data?.countries">
      <div v-for="country in data?.countries" :key="country.code" @click="selectedCountry = country">
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
  </div>
</template>
