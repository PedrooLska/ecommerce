<template>
  <div class="flex flex-col justify-between p-2 border rounded-lg">
    <CardProductHeader 
      :product="product" 
    />
    <CardProductContent 
      :product="product"
     />
    <CardProductPrice 
      :product="product" 
    />
    <CardProductActions 
      :product="product" 
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type IProduct from '@/entities/product'

import CardProductHeader from './CardProductHeader.vue'
import CardProductContent from './CardProductContent.vue'
import CardProductPrice from './CardProductPrice.vue'
import CardProductActions from './CardProductActions.vue'

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    default: () => {}
  }
})
</script>