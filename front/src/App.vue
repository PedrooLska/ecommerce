<template>
  <div>
    <HeaderSection />

    <ProductSection 
      :products="products"
     />
      
    <SidebarCart 
      v-if="CartStore.isCartSidebarVisible" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ProductRepository from '@/core/repository/product'
import type IProduct from '@/core/entity/product'

import HeaderSection from '@/ui/components/HeaderSection.vue'
import ProductSection from '@/ui/components/ProductSection.vue';
import SidebarCart from '@/ui/components/SidebarCart.vue';

import cartStore from '@/ui/stores/cart'
const CartStore = cartStore()

const products = ref<IProduct[]>([])

const getProducts=  async () => {
  try {
    products.value = await ProductRepository.getAll()
  } catch (error) {
    products.value = []
  }
}

getProducts()
</script>