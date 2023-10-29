<template>
  <div class="flex-col mb-2">
    <p class="text-gray-500 text-xs font-medium line-through"> 
      {{ formatterPrice(product.totalValue) }}
    </p>

    <p class="flex flex-col text-violet-400"> 
      <span class="text-violet-400 text-xl font-medium">
        {{ formatterPrice(product.pixDiscountPrice) }}
      </span>

      <span class="text-gray-500 font-medium text-xs">
        Á vista no PIX
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type IProduct from '@/core/domain/entity/product'

import Utils from '@/ui/services/utils'

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    default: () => {}
  }
})

const formatterPrice = (price: number) => Utils.formatterPrice(price)
</script>