import { ref } from 'vue'
import { defineStore } from 'pinia'

import type ICart from '@/entities/cart'
import type IProduct from '@/entities/product'

export default defineStore('cart', () => {
  const isCartSidebarVisible = ref<Boolean>(false)
  const cartList = ref<ICart[]>([])

  const setIsCarSidebarVisible = (value: boolean): void => {
    isCartSidebarVisible.value = value
  }

  const setCartList = (product: IProduct): void => {
    const isVerifyProductIsAdded = cartList.value.findIndex(({ product: { id } }) => id === product.id)

    if(isVerifyProductIsAdded > -1) {
      addQuantityProductCart(product)
      return
    }

    cartList.value = [...cartList.value, { quantity: 1, product: product }]
  } 

  const addQuantityProductCart = (product: IProduct): void => {
    const isVerifyProductIsAdded = cartList.value.findIndex(({ product: { id } }) => id === product.id)

    if(cartList.value[isVerifyProductIsAdded].quantity === 100) {
      alert('Você atingiu a quantidade máxima disponível em estoque para a realização da compra.')
      return 
    }

    cartList.value[isVerifyProductIsAdded].quantity += 1
  }

  const removeQuantityProductCart = (product: IProduct): void => {
    const isVerifyProductIsAdded = cartList.value.findIndex(({ product: { id } }) => id === product.id)

    cartList.value[isVerifyProductIsAdded].quantity -= 1

    if(cartList.value[isVerifyProductIsAdded].quantity === 0) {
      alert('Ao zerar a quantidade do item no carrinho, ele foi removido do seu carrinho.')
      cartList.value.splice(isVerifyProductIsAdded)
      return 
    }
  }

  return { 
    isCartSidebarVisible,
    setIsCarSidebarVisible,
    cartList, 
    setCartList,
    addQuantityProductCart,
    removeQuantityProductCart
  }
})