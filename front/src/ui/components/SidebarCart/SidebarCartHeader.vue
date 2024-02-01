<template>
  <div class="flex justify-center relative">
    <h1 class="text-2xl text-white font-medium mb-5">Meu carrinho</h1>

    <XMarkIcon 
      @click="closeSidebarCart"
      class="w-5 text-white absolute right-0 cursor-pointer" 
    />
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'

import cartStore from '@/ui/stores/cart'
const CartStore = cartStore()

const closeSidebarCart = (): void => CartStore.setIsCarSidebarVisible(false)
</script>
