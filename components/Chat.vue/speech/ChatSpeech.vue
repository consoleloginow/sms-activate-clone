<script lang="ts">
export interface ChatSpeechProps {
  side: 'incoming' | 'outgoing'
}

export const injectionKey = Symbol('ChatSpeechProvide') as InjectionKey<ChatSpeechProps>
</script>

<script lang="ts" setup>
const props = defineProps<ChatSpeechProps>()

provide(injectionKey, props)
</script>

<template>
  <div
    class="relative flex px-2"
    :class="{
      'pr-8 justify-start': props.side === 'incoming',
      'pl-8 justify-end': props.side === 'outgoing',
    }"
  >
    <slot />
  </div>
</template>
