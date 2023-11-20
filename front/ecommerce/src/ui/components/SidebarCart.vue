<template>
  <div v-if="CartStore.isCartSidebarVisible" class="w-3/12 min-h-screen flex items-center justify-between flex-col p-4 absolute top-0 right-0 bg-violet-300 drop-shadow-md">
      <div class="w-full">
        <SidebarCartHeader />

        <SidebarCartCard 
          v-for="cart in CartStore.cartList" 
          :key="cart.product.id"  
          :cart="cart" 
        />
      </div>
      
  
      <div class="grid grid-cols-2 gap-1 text-white font-medium">
        <div>
          Total a prazo<br>
          {{ formatterPrice(CartStore.totalCart.totalValue) }}
        </div>
    
        <div>
          Total no pix á vista<br>
          {{ formatterPrice(CartStore.totalCart.pixDiscountPrice) }}
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import Utils from '@/ui/services/utils'

import SidebarCartHeader from '@/ui/components/SidebarCart/SidebarCartHeader.vue'
import SidebarCartCard from '@/ui/components/SidebarCart/SidebarCartCard.vue';

import cartStore from '@/ui/stores/cart'
const CartStore = cartStore()

const formatterPrice = (price: number) => Utils.formatterPrice(price)
</script>
