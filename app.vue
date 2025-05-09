<script lang="ts" setup>
import Tabs from '~/components/Tabs.vue'
import Toolbar from '~/components/Toolbar.vue'
</script>

<template>
  <div class="h-screen overflow-hidden">
    <NuxtPage class="h-full pb-25" />

    <footer class="fixed bottom-0 inset-x-0 border-b bg-muted">
      <Toolbar />
      <Tabs />
    </footer>
  </div>
</template>
