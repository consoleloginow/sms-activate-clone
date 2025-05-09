<script lang="ts" setup>
import { MessagesSquareIcon, ShoppingBagIcon, UserRoundIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="flex justify-around px-4 pb-1 text-muted-foreground">
    <NuxtLink to="/" class="flex flex-col items-center">
      <ShoppingBagIcon />
      <span class="text-xs font-bold">Store</span>
    </NuxtLink>

    <NuxtLink to="/chat" class="flex flex-col items-center">
      <MessagesSquareIcon />
      <span class="text-xs font-bold">Chat</span>
    </NuxtLink>

    <NuxtLink to="/profile" class="flex flex-col items-center">
      <UserRoundIcon />
      <span class="text-xs font-bold">Profile</span>
    </NuxtLink>
  </div>
</template>
