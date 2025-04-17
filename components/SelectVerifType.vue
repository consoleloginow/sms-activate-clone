<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { StockVerifType } from '@/shared/types/stock'

import { CircleHelp } from 'lucide-vue-next'
</script>

<template>
  <div id="SelectVerifType" class="relative h-full">
    <span class="mx-4 font-bold">Способ подтверждения номера</span>

    <RadioGroup class="ml-4" :default-value="StockVerifType.BY_SMS">
      <Label
        v-for="v in Object.values(StockVerifType)"
        :key="v"
        class="group"
      >
        <RadioGroupItem :id="v" :value="v" />
        <div class="w-full flex items-center not-group-last:border-b py-3 pr-4">
          <span class="grow">{{ v }}</span>
          <span v-if="v === StockVerifType.BY_SMS" class="opacity-50">most used</span>
        </div>
      </Label>
    </RadioGroup>

    <div class="relative mx-4 mt-2 aspect-square border rounded-lg grid place-items-center overflow-hidden">
      <span class="relative z-10">тут картинка будет</span>
      <svg class="absolute inset-0 h-full w-full stroke-accent" fill="none">
        <defs>
          <pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%" />
      </svg>
      <button class="absolute top-1 right-1">
        <CircleHelp class="size-5" />
      </button>
    </div>

    <div class="m-2">
      <Button class="w-full">
        Выбрать страну ->
      </Button>
    </div>
  </div>
</template>
