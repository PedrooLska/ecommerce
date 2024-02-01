<template>
  <div class="flex justify-end items-center mb-5">
    <div  v-for="i in 5" :key="i">
      <StarIcon v-if="product.rating >= i"  class="h-4 w-4 text-violet-400" />
      <StarIcon v-else  class="h-4 w-4 text-gray-400" />
    </div>

    <span class="text-gray-400 font-medium text-xs">
      ({{ product.totalEvaluations }})
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type IProduct from '@/core/entity/product'

import { StarIcon } from '@heroicons/vue/24/solid'

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    default: () => {}
  }
})
</script>