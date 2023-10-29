<template>
  <div class="relative">
    <HeaderSection class="flex items-center justify-center h-28 bg-violet-400" />
    <ProductsSection :products="products" />
      
    <SidebarCart v-if="CartStore.isCartSidebarVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ProductRepository from '@/core/domain/repository/product'
import type IProduct from '@/core/domain/entity/product'

import HeaderSection from '@/ui/components/HeaderSection.vue'
import ProductsSection from '@/ui/components/ProductsSection.vue';
import SidebarCart from '@/ui/components/SidebarCartSection.vue';

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