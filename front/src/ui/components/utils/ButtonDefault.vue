<template>
  <button 
    @click="emit('click')"
    type="button" 
    :class="`flex justify-center items-center ${width} h-10 text-gray-500 font-medium border rounded-lg border-violet-400 hover:text-white hover:bg-violet-400`"
  >
    <slot name="content"></slot>
  </button>
</template>

<script setup lang="ts">
import { defineSlots, defineProps, defineEmits } from 'vue'

defineSlots<{
  content: any
}>

defineProps({
  width: {
    type: String,
    default: ''
  }
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>