<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Product } from '@/types'

defineProps<{
  product: Product
}>()
</script>

<template>
  <RouterLink :to="`/shop/${product.id}`" class="group flex flex-col bg-brand-surface border border-brand-border relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.02] hover:border-brand-muted">
    <div class="aspect-[4/5] w-full bg-brand-light flex items-center justify-center relative overflow-hidden border-b border-brand-border p-0">
      <img :src="product.image" :alt="product.title" class="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
      <div class="absolute inset-0 bg-brand-bg/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <span class="text-[12px] tracking-widest uppercase font-semibold text-brand-dark border border-brand-dark bg-brand-bg px-4 py-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">View Details</span>
      </div>
    </div>
    
    <div class="p-5 flex flex-col flex-grow">
      <span class="text-[11px] uppercase tracking-wider text-brand-gray mb-1.5">{{ product.category }}</span>
      <h3 class="font-sans text-[15px] font-medium text-brand-dark mb-1.5 leading-snug">{{ product.title }}</h3>
      <span class="text-[15px] font-medium text-brand-dark mt-auto">${{ product.price }}</span>
    </div>
  </RouterLink>
</template>
