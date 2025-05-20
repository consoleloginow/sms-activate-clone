<script lang="ts" setup>
import { CopyIcon } from 'lucide-vue-next'
import { useSharedState } from '~/stores/useSharedState'

import {
  ChatSpeech,
  ChatSpeechContent,
  ChatSpeechFitContent,
} from './speech'

const {
  selectedItem: item,
  selectedCountry: country,
} = storeToRefs(useSharedState())

const tel = ref<string>()
const sms = ref<string>()

setTimeout(() => {
  tel.value = '+7 920 158 35 56'
}, 3000)

const smsTimeout = setTimeout(() => {
  sms.value = '123456'
}, 9000)
</script>

<template>
  <div v-if="item && country" class="h-full flex flex-col gap-2">
    <ChatSpeech side="outgoing">
      <ChatSpeechContent class="w-full py-2">
        <div class="flex items-center">
          <div class="relative size-10">
            <img
              class="absolute z-1 top-0 left-0 size-7.5 rounded-lg"
              :src="item.logoUrl"
            >
            <img
              class="absolute z-2 bottom-0 right-0 size-5 rounded-full"
              :src="country.flagUrl"
            >
          </div>

          <div class="grow pl-2">
            <div class="text-sm font-bold">
              {{ item.name }}
            </div>
            <div class="text-sm">
              {{ country.name }}
            </div>
          </div>
        </div>
      </ChatSpeechContent>
    </ChatSpeech>

    <template v-if="tel">
      <ChatSpeech side="incoming">
        <ChatSpeechContent>
          {{ tel }}
        </ChatSpeechContent>

        <div class="bg-orange-200 p-2 rounded-lg ml-1">
          <CopyIcon class="size-3.5" />
        </div>
      </ChatSpeech>

      <div v-if="!sms" class="text-muted-foreground">
        <div class="pl-10">
          <div class="pr-4 py-1 border-b">
            <span class="text-blue-500 font-bold">получить другой номер</span>
            если текущий уже используется другим пользователем
          </div>
        </div>
      </div>
    </template>

    <template v-if="sms">
      <ChatSpeech side="incoming">
        <ChatSpeechContent>
          {{ sms }}
        </ChatSpeechContent>

        <div class="bg-orange-200 p-2 rounded-lg ml-1">
          <CopyIcon class="size-3.5" />
        </div>
      </ChatSpeech>

      <div class="text-muted-foreground">
        <div class="pl-10">
          <div class="pr-4 py-1 border-b">
            <span class="text-blue-500 font-bold">повторить</span>
            если sms-код не подошел
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
