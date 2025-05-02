<script lang="ts" setup>
import type { StoreCountry } from '~/shared/types/store'

const route = useRoute()

const countriesSearchQuery = useState<string>('countriesSearchQuery', () => '')

const { data } = await useFetch(() => `/api/items/${route.params.item}/countries`, {
  key: 'countriesSearch',
  query: {
    search: countriesSearchQuery,
  },
})

const selectedCountry = useState<StoreCountry | undefined>('selectedCountry', () => undefined)
</script>

<template>
  <div>
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
</template>
