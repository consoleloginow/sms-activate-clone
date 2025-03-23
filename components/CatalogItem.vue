<script lang="ts" setup>
interface Props {
  slug: string
  name: string
  logoUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="CatalogItem flex items-center p-2">
    <img class="size-10 rounded" :src="props.logoUrl">
    <span class="grow mx-2 text-lg font-semibold">{{ props.name }}</span>
  </div>
</template>
