<template>
  <div class="container mx-auto">
    <div class="flex justify-center flex-wrap">
      <CardProduct 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
        />
    </div>
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
    alert('Não foi possivel obter a lista de produtos cadastrados. Por favor, tente novamente')
  }
}

getProducts()
</script>