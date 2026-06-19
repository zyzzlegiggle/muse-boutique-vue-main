<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useDetailsStore } from '../stores/detailsStore';
import { Search, X, ShoppingBag } from '@lucide/vue';
import { useListingStore } from '../stores/listingStore';

const detailsStore = useDetailsStore();
const cartItemsCount = computed(() => detailsStore.cartItemsCount);
const listingStore = useListingStore();
const searchQuery = ref('');
const isSearchFocused = ref(false);

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return [];
  return listingStore.products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});
const openCart = () => {
  detailsStore.toggleCart(true);
};
const handleBlur = () => {
  setTimeout(() => {
    isSearchFocused.value = false;
  }, 200);
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

      <div class="flex items-center justify-end flex-1 gap-4 relative">
        <div
          class="relative flex items-center border-b border-brand-border focus-within:border-brand-dark transition-all duration-300"
        >
          <Search :size="16" class="text-brand-muted mr-2" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="bg-transparent border-none text-sm py-1.5 focus:outline-none w-28 sm:w-36 focus:w-44 sm:focus:w-48 transition-all duration-300 text-brand-dark"
            @focus="isSearchFocused = true"
            @blur="handleBlur"
          />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="p-1 hover:text-brand-gold transition-colors"
          >
            <X :size="14" />
          </button>
        </div>
        <!-- Shopping Bag Button -->
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

        <div
          v-if="isSearchFocused && searchQuery && searchResults.length > 0"
          class="absolute top-full right-0 mt-2 w-80 bg-brand-bg border border-brand-border shadow-lg z-[999] max-h-96 overflow-y-auto"
        >
          <div
            class="p-2 border-b border-brand-border text-[11px] uppercase tracking-wider text-brand-muted font-semibold"
          >
            Products Found ({{ searchResults.length }})
          </div>
          <div class="flex flex-col">
            <RouterLink
              v-for="product in searchResults"
              :key="product.id"
              :to="`/shop/${product.id}`"
              class="flex gap-3 p-3 hover:bg-brand-surface border-b border-brand-border last:border-b-0 transition-colors"
              @click="searchQuery = ''"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="w-12 h-12 object-cover bg-brand-surface"
              />
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-medium text-brand-dark truncate">
                  {{ product.title }}
                </h4>
                <p class="text-xs text-brand-muted truncate">
                  {{ product.subtitle }}
                </p>
              </div>
              <span class="text-sm font-medium text-brand-dark"
                >${{ product.price }}</span
              >
            </RouterLink>
          </div>
        </div>

        <!-- Empty State in Dropdown -->
        <div
          v-else-if="
            isSearchFocused && searchQuery && searchResults.length === 0
          "
          class="absolute top-full right-0 mt-2 w-80 bg-brand-bg border border-brand-border shadow-lg z-[999] p-4 text-center text-sm text-brand-muted"
        >
          No products found for "{{ searchQuery }}"
        </div>
      </div>
    </div>
  </header>
</template>
