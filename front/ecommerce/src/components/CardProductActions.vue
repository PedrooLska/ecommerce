<template>
  <div class="flex justify-between gap-1">
    <ButtonDefault width="w-2/3">
      <template #content>
        COMPRAR
      </template>
    </ButtonDefault>

    <ButtonDefault width="w-1/3">
      <template #content>
        <ShoppingCartIcon class="w-6" />
      </template>
    </ButtonDefault>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import type { PropType } from 'vue'
import type Product from '../entities/products'

import ButtonDefault from './ButtonDefault.vue'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>