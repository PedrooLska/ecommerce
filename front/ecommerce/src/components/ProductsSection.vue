<template>
  <section class="container mx-auto py-5">
    <div class="grid gap-2 mx-2 mr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <CardProduct 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
        />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'

import type IProduct from '@/entities/product'

import CardProduct from './CardProduct.vue'; 

defineProps({
  products: {
    type: Array as PropType<IProduct[]>,
    default: () => {}
  }
})
</script>