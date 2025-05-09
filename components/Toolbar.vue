<script lang="ts" setup>
import { ArrowDownUpIcon, SearchIcon } from 'lucide-vue-next'
import { useSharedState } from '~/stores/useSharedState'

const route = useRoute()

const {
  isItemsSearchActive,
  itemsSearch,
  countriesSearch,
} = storeToRefs(useSharedState())
</script>

<template>
  <div class="flex items-center px-4 py-2">
    <div class="relative grow h-10 bg-background border rounded-xl overflow-hidden">
      <Transition
        enter-active-class="animate-in fade-in slide-in-from-left-[50%] duration-250"
        leave-active-class="animate-out fade-out slide-out-to-left-[50%] duration-250"
      >
        <div
          v-if="route.name === 'index'"
          class="absolute inset-0 w-full flex items-center"
        >
          <SearchIcon class="absolute left-2 size-5 text-muted-foreground" />
          <input
            v-model="itemsSearch"
            type="search"
            placeholder="Search items..."
            class="size-full h-full pl-8 placeholder:text-muted-foreground focus:outline-none"
            @focusin="isItemsSearchActive = true"
            @focusout="isItemsSearchActive = false"
          >
        </div>
      </Transition>

      <Transition
        enter-active-class="animate-in fade-in slide-in-from-right-[50%] duration-250"
        leave-active-class="animate-out fade-out slide-out-to-right-[50%] duration-250"
      >
        <div
          v-if="route.name === 'store-item'"
          class="absolute inset-0 w-full flex items-center"
        >
          <SearchIcon class="absolute left-2 size-5 text-muted-foreground" />
          <input
            v-model="countriesSearch"
            type="search"
            placeholder="Search countries..."
            class="size-full h-full pl-8 placeholder:text-muted-foreground focus:outline-none"
          >
        </div>
      </Transition>
    </div>

    <div
      class="relative h-10 transition-[margin,width] duration-250"
      :class="[route.name === 'store-item' ? 'w-10 ml-2' : 'w-0']"
    >
      <Transition
        enter-active-class="animate-in fade-in zoom-in duration-250"
        leave-active-class="animate-out fade-out zoom-out duration-250"
      >
        <button
          v-show="route.name === 'store-item'"
          class="absolute inset-0 grid place-items-center bg-background border rounded-xl"
        >
          <ArrowDownUpIcon class="size-5" />
        </button>
      </Transition>
    </div>
  </div>
</template>
