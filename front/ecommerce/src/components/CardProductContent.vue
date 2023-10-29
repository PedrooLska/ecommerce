<template>
  <div>
    <div class="w-full h-40 flex justify-center">
      <img :src="product.image">
    </div>
    
    <p class="h-19 text-gray-500 font-medium mb-5 mt-5">
      {{ formatterNameProduct }} 
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type IProduct from '@/entities/product'

import Utils from '@/services/Utils'

const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    default: () => {}
  }
})

const formatterNameProduct = Utils.formatterCutText(props.product?.name, 96)
</script>