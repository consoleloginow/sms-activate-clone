<script lang="ts" setup>
import ChatSpeechContent from './ChatSpeechContent.vue'

const fittedEl = useTemplateRef('fitted')
const { width } = useElementBounding(fittedEl)
</script>

<template>
  <ChatSpeechContent :style="{ width: `${width + 16}px` }">
    <slot />
  </ChatSpeechContent>

  <div class="absolute inset-x-4 px-2 text-sm invisible">
    <span ref="fitted" class="w-fit">
      <slot />
    </span>
  </div>
</template>
