<script lang="ts" setup>
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from '@/components/ui/drawer'

import { X } from 'lucide-vue-next'

const { data: getItemsData, status: getItemsStatus } = useFetch('/api/stock/items', {
  lazy: true,
})

const selectedItem = ref<StockItem>()

const { data: _getCountriesData, status: getCountriesStatus } = useFetch(() => `/api/stock/items/${selectedItem.value?.slug}/countries`, {
  lazy: true,
  immediate: false,
  watch: [selectedItem],
})

const isDrawerOpen = computed({
  get: () => !!selectedItem.value,
  set: (value) => {
    if (!value) {
      selectedItem.value = undefined
    }
  },
})
</script>

<template>
  <div class="grid h-screen">
    <div v-if="getItemsStatus === 'pending'">
      loading...
    </div>

    <template v-if="getItemsData?.items">
      <div class="p-2">
        <div v-for="item in getItemsData?.items" :key="item.slug">
          <div class="flex items-center p-2" @click="selectedItem = item">
            <img class="size-8 rounded-lg" :src="item.logoUrl">
            <span class="grow mx-2 text-lg font-semibold">{{ item.name }}</span>
          </div>
        </div>
      </div>

      <Drawer v-model:open="isDrawerOpen">
        <DrawerContent>
          <div class="m-2 p-2 flex items-center rounded-xl bg-muted">
            <img class="size-8 rounded-lg" :src="selectedItem?.logoUrl">
            <span class="grow mx-2 text-lg font-semibold">{{ selectedItem?.name }}</span>
            <DrawerClose>
              <X class="size-5" />
            </DrawerClose>
          </div>
          <!--
            <div v-if="getCountriesStatus === 'pending'">
              loading...
            </div> -->

          <SelectVerifType />

          <!-- <div v-if="getCountriesData?.countries">
            <div v-for="country in getCountriesData?.countries" :key="country.code">
              <div class="flex items-center p-2">
                <img class="size-8 rounded-lg" :src="country.flagUrl">
                <div class="grow mx-2">
                  <div class="leading-none font-semibold">
                    {{ country.name }}
                  </div>
                  <div class="text-xs">
                    {{ country.count }} шт.
                  </div>
                </div>
                <span class="">${{ country.price }}</span>
              </div>
            </div>
          </div> -->
        </DrawerContent>
      </Drawer>
    </template>
  </div>
</template>
