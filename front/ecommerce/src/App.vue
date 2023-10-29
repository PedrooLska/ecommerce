<template>
  <div class="relative">
    <HeaderSection class="flex items-center justify-center h-28 bg-violet-400" />
    <ProductsSection :products="products" />
      
    <SidebarCart v-if="CartStore.isCartSidebarVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ProductsRepository from './request/products'
import type Product from './entities/product'

import HeaderSection from './components/HeaderSection.vue'
import ProductsSection from './components/ProductsSection.vue';
import SidebarCart from './components/SidebarCart.vue';

import cartStore from '@/stores/cart'
const CartStore = cartStore()

const products = ref<Product[]>([])

const getProducts=  async () => {
  try {
    products.value = await ProductsRepository.getAll()
  } catch (error) {
    products.value = []
  }
}

getProducts()
</script>