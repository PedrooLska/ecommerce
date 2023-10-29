<template>
  <div class="flex justify-between">
    <ButtonDefault width="w-3/4">
      <template #content>
        COMPRAR
      </template>
    </ButtonDefault>

    <ButtonDefault width="w-14">
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