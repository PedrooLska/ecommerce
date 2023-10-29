<template>
  <header class="flex items-center justify-center h-28 bg-violet-400 drop-shadow-md">
    <div class="container mx-auto">
      <nav class="flex justify-end mr-10">
        <ul>
          <li>
            <ShoppingCartIcon 
              @click="setIsCarSidebarVisible" 
              class="w-6 text-white cursor-pointer" 
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

import cartStore from '@/stores/cart'
const CartStore = cartStore()

const setIsCarSidebarVisible = (): void => {
  CartStore.setIsCarSidebarVisible(!CartStore.isCartSidebarVisible)
}
</script>