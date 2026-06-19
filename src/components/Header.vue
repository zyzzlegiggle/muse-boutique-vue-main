<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useDetailsStore } from '../stores/detailsStore';
import { ShoppingBag } from '@lucide/vue';

const detailsStore = useDetailsStore();
const cartItemsCount = computed(() => detailsStore.cartItemsCount);

const openCart = () => {
  detailsStore.toggleCart(true);
};
</script>

<template>
  <header
    class="sticky top-0 left-0 w-full bg-brand-bg/85 backdrop-blur-md border-b border-brand-border z-[900] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
  >
    <div
      class="max-w-7xl w-full mx-auto px-6 h-20 flex items-center justify-between md:px-8"
    >
      <nav class="flex gap-8 flex-1">
        <RouterLink
          to="/"
          class="text-[13px] uppercase tracking-[0.12em] font-medium text-brand-muted hover:text-brand-dark py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-dark after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
          active-class="text-brand-dark after:scale-x-100"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/shop"
          class="text-[13px] uppercase tracking-[0.12em] font-medium text-brand-muted hover:text-brand-dark py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-dark after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
          active-class="text-brand-dark after:scale-x-100"
        >
          Shop
        </RouterLink>
      </nav>

      <RouterLink
        to="/"
        class="font-serif text-2xl md:text-3xl tracking-[0.25em] text-brand-dark text-center flex-1 flex justify-center md:-mr-10"
      >
        MUSE
      </RouterLink>

      <div class="flex items-center justify-end flex-1">
        <button
          class="bg-none border-none cursor-pointer p-2 relative text-brand-dark hover:text-brand-gold transition-all duration-200 ease-in-out flex items-center justify-center"
          @click="openCart"
          aria-label="Open shopping bag"
        >
          <ShoppingBag :size="18" stroke-width="1.5" />
          <span
            v-if="cartItemsCount > 0"
            class="absolute -top-1 -right-1 bg-brand-dark text-brand-bg text-[10px] font-semibold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1"
            >{{ cartItemsCount }}</span
          >
        </button>
      </div>
    </div>
  </header>
</template>
