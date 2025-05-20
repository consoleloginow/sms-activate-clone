<script lang="ts" setup>
import { injectionKey } from './ChatSpeech.vue'

const injected = inject(injectionKey)!
</script>

<template>
  <div
    class="relative rounded-lg px-2 py-1"
    :class="{
      'bg-orange-200': injected.side === 'incoming',
      'border bg-white': injected.side === 'outgoing',
    }"
  >
    <slot />

    <!-- <div
      class="absolute bottom-0 text-2xs font-mono"
      :class="{
        'left-3 text-gray-400': injected.side === 'incoming',
        'right-3 text-slate-400': injected.side === 'outgoing',
      }"
    >
      11:21
    </div> -->

    <!-- <svg
      width="16" height="16" viewBox="0 0 16 16"
      class="group-not-last/ChatSpeech:hidden absolute z-1 -bottom-2 fill-blue-100"
      :class="{
        '-left-2': side === 'incoming',
        '-right-2 -scale-x-100': side === 'outgoing',
      }"
    >
      <path d="M 7.5 0 A 8 8 0 0 1 0 8.5 L 16 8.5" />
    </svg> -->
  </div>
</template>
