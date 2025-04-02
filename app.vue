<script lang="ts" setup>
const { data: getItemsData, status: getItemsStatus } = useFetch('/api/catalog/items', {
  lazy: true,
})

const selectedItem = ref<{ slug: string }>()

const { data: getCountriesData, status: getCountriesStatus } = useFetch(() => `/api/catalog/items/${selectedItem.value?.slug}/countries`, {
  lazy: true,
  immediate: false,
  watch: [selectedItem],
})
</script>

<template>
  <div class="grid h-screen">
    <div v-if="getItemsStatus === 'pending'">
      loading...
    </div>

    <template v-if="getItemsData?.items">
      <div v-for="item in getItemsData?.items" :key="item.slug">
        <div class="flex items-center p-2" @click="selectedItem = item">
          <img class="size-10 rounded" :src="item.logoUrl">
          <span class="grow mx-2 text-lg font-semibold">{{ item.name }}</span>
        </div>
      </div>

      <UDrawer v-model:open="selectedItem">
        <template #content>
          <div v-if="getCountriesStatus === 'pending'">
            loading...
          </div>

          <div v-if="getCountriesData?.countries" class="overflow-y-scroll">
            <div v-for="country in getCountriesData?.countries" :key="country.code">
              <div class="flex items-center p-2">
                <img class="w-10 h-7.5 rounded" :src="country.flagUrl">
                <div class="grow mx-2">
                  <div class="font-semibold">
                    {{ country.name }}
                  </div>
                  <div class="text-xs">
                    {{ country.count }} шт.
                  </div>
                </div>
                <span class="">${{ country.price }}</span>
              </div>
            </div>
          </div>
        </template>
      </UDrawer>
    </template>
  </div>
</template>
