<template>
  <div class="bg-white gap-2 mb-1 drop-shadow-md border rounded-lg p-2">
    <div class="flex items-center">
      <img 
        :src="cart.product.image" 
        class="border border-gray-100 rounded-lg p-2 h-24 mr-2"
      >

      <div class="flex flex-col mr-2">
        <span class="leading-4 font-medium">
          {{ formatterNameProduct(cart.product.name) }}
        </span>

        <span class="mt-2 mr-2 font-medium line-through">
          {{ formatterPrice(cart.product.totalValue) }}
        </span>

        <span class="font-bold text-violet-400">
          {{ formatterPrice(cart.product.pixDiscountPrice) }} (À vista no pix)
        </span>
      </div>


      <div class="flex flex-col items-center justify-center rounded-sm">
        <PlusIcon 
          @click="addQuantityProduct(cart.product)"
          class="w-6 h-8 rounded-t-md text-violet-500 bg-gray-50 cursor-pointer hover:text-white hover:bg-violet-500"
        />

        <span class="w-full flex justify-center text-black bg-gray-50">
          {{ cart.quantity }}
        </span>

        <MinusIcon 
          @click="removeQuantityProduct(cart.product)"
          class="w-6 h-8 rounded-b-md text-violet-500 bg-gray-50 cursor-pointer hover:text-white hover:bg-violet-500" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'

import type IProduct from '@/core/entity/product'
import type ICart from '@/core/entity/cart'

import Utils from '@/ui/services/utils'

import cartStore from '@/ui/stores/cart'
const CartStore = cartStore()

defineProps({
  cart: {
    type: Object as PropType<ICart>,
    default: () => {}
  }
})

const formatterNameProduct = (value: string): string => Utils.formatterCutText(value, 68)
const formatterPrice = (price: number) => Utils.formatterPrice(price)

const addQuantityProduct = (product: IProduct): void => CartStore.setCartList(product)
const removeQuantityProduct = (product: IProduct): void => CartStore.removeQuantityProductCart(product)
</script>
