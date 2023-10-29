<template>
  <div>
    <header class="flex items-center justify-center h-28 bg-violet-400">
      <nav>
        <ul>
          <li>sads</li>
        </ul>
      </nav>
    </header>

    <section class="container mx-auto">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <CardProduct 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
          />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ProductsRepository from './request/products'
import type Product from './entities/products'

import CardProduct from './components/CardProduct.vue'; 

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