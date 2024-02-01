<template>
  <div class="flex flex-col justify-between p-2 border rounded-lg">
    <ProductSectionCardHeader 
      :product="product" 
    />
    
    <ProductSectionCardContent 
      :product="product"
     />

    <ProductSectionCardPrice 
      :product="product" 
    />

    <ProductSectionCardActions 
      :product="product" 
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type IProduct from '@/core/entity/product'

import ProductSectionCardHeader from './ProductSectionCardHeader.vue'
import ProductSectionCardContent from './ProductSectionCardContent.vue'
import ProductSectionCardPrice from './ProductSectionCardPrice.vue'
import ProductSectionCardActions from './ProductSectionCardActions.vue'

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    default: () => {}
  }
})
</script>