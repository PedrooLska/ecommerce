<template>
  <div class="flex justify-between gap-1">
    <ButtonDefault width="w-2/3">
      <template #content>
        COMPRAR
      </template>
    </ButtonDefault>

    <ButtonDefault 
      width="w-1/3" 
      @click="setProductCart"
    >
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

import type IProduct from '@/core/domain/entity/product'
import cartStore from '@/ui/stores/cart'

import ButtonDefault from '../utils/ButtonDefault.vue'

const CartStore = cartStore()

const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true
  }
})

const setProductCart = (): void => CartStore.setCartList(props.product)
</script>