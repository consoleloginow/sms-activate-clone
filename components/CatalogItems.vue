<script lang="ts" setup>
const { data } = await useFetch('/api/catalog/items')
</script>

<template>
  <div class="CatalogItems">
    <div v-for="item in data.items" :key="item.slug">
      <CatalogItem v-bind="item" />
    </div>
  </div>
</template>
