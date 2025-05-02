<script lang="ts" setup>
import type { StoreCountry, StoreItem } from '~/shared/types/store'
import { useCountriesStore } from '~/stores/countries.store'

const route = useRoute()
const countriesStore = useCountriesStore()

const selectedItem = useState<Partial<StoreItem> | undefined>('selectedItem', () => undefined)

if (!selectedItem.value) {
  selectedItem.value = {
    slug: route.params.item as string,
  }
}

if (!countriesStore.data) {
  await countriesStore.fetch()
}

selectedItem.value = countriesStore.data?.item

const selectedCountry = useState<StoreCountry | undefined>('selectedCountry', () => undefined)
</script>

<template>
  <div>
    <div v-for="country in countriesStore.data?.countries" :key="country.code" @click="selectedCountry = country">
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
