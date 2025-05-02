<script lang="ts" setup>
import type { StoreItem } from '~/shared/types/store'
import { X } from 'lucide-vue-next'
import Countries from '~/components/Countries.vue'

const route = useRoute()

const selectedItem = useState<Partial<StoreItem> | undefined>('selectedItem', () => undefined)

if (!selectedItem.value) {
  selectedItem.value = {
    slug: route.params.item as string,
  }
}
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <div class="sticky top-2 m-2 p-2 flex items-center rounded-xl bg-muted">
        <img class="size-8 rounded-lg" :src="selectedItem?.logoUrl">
        <span class="grow mx-2 text-lg font-semibold">{{ selectedItem?.name }}</span>
        <NuxtLink to="/" @click="() => { selectedItem = undefined }">
          <X class="size-5" />
        </NuxtLink>
      </div>
    </ClientOnly>

    <Countries />
  </div>
</template>
