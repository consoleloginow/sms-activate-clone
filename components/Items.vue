<script lang="ts" setup>
import { useInfiniteQuery } from '@tanstack/vue-query'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { useSharedState } from '~/stores/useSharedState'

const {
  selectedItem,
} = storeToRefs(useSharedState())

const {
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
} = useInfiniteQuery({
  queryKey: ['items'],
  queryFn: ({ pageParam }) => $fetch(`/api/items?page=${pageParam}`),
  initialPageParam: 1,
  getNextPageParam: lastPage => lastPage.nextPage,
})

const fetchedItems = computed(() => data.value?.pages.flatMap(page => page.items) ?? [])
const totalCount = computed(() => data.value?.pages[0]?.totalCount ?? 0)

const virtualScrollEl = useTemplateRef('virtual-scroll')

const virtualizer = useVirtualizer(computed(() => ({
  count: totalCount.value,
  getScrollElement: () => virtualScrollEl.value,
  estimateSize: () => 48,
})))

const virtualItems = computed(() => virtualizer.value.getVirtualItems().map(({ index, ...virtualItem }) => ({
  item: fetchedItems.value?.[index],
  index,
  ...virtualItem,
})))

watchEffect(() => {
  const [lastVirtualItem] = [...virtualItems.value].reverse()

  if (!lastVirtualItem)
    return

  if (
    lastVirtualItem.index >= fetchedItems.value?.length - 1
    && hasNextPage.value
    && !isFetchingNextPage.value
  ) {
    fetchNextPage()
  }
})
</script>

<template>
  <div ref="virtual-scroll" class="max-h-screen overflow-y-auto">
    <div
      class="relative"
      :style="{ height: `${virtualizer.getTotalSize()}px` }"
    >
      <div
        v-for="({ item, ...virtualItem }) in virtualItems"
        :key="item?.slug"
        class="absolute top-0 w-full"
        :style="{ transform: `translateY(${virtualItem.start}px)` }"
      >
        <NuxtLink
          :to="`/store/${item?.slug}`"
          class="flex items-center py-2"
          @click="selectedItem = item"
        >
          <img class="ml-4 size-8 rounded-lg" :src="item?.logoUrl">
          <span class="ml-4 grow text-lg font-semibold">{{ item?.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
