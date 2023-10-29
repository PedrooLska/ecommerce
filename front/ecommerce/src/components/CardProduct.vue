<template>
  <div class="w-1/5 mt-5 mx-2 p-2 bg-white border rounded-lg">
    <CardProductHeader 
      :product="product" 
    />
    <CardProductContent 
      :product="product"
     />
    <CardProductPrice 
      :product="product" 
    />
    <CardActions 
      :product="product" 
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type Product from '../entities/products'

import CardProductHeader from './CardProductHeader.vue'
import CardProductContent from './CardProductContent.vue'
import CardProductPrice from './CardProductPrice.vue'
import CardActions from './CardProductActions.vue'

defineProps({
  product: {
    type: Object as PropType<Product>,
    default: () => {}
  }
})
</script>