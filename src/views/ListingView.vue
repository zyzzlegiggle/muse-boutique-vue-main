<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useListingStore } from '../stores/listingStore';
import ProductCard from '../components/ProductCard.vue';

const listingStore = useListingStore();
const route = useRoute();

const checkQueryParams = () => {
  if (route.query.category) {
    listingStore.setSelectedCategory(route.query.category as string);
  } else {
    listingStore.setSelectedCategory('All');
  }
};

onMounted(() => {
  checkQueryParams;
});

watch(
  () => route.query.category,
  () => {
    checkQueryParams();
  },
);
</script>

<template>
  <div class="max-w-7xl w-full mx-auto px-6 md:px-8 py-10 animate-fade-in">
    <header class="mb-12 border-b border-brand-border pb-8">
      <h1 class="text-4xl md:text-5xl mb-2 font-serif">The Collection</h1>
      <p class="text-[15px] text-brand-muted max-w-[500px] leading-relaxed">
        Carefully designed wardrobe staples, stone objects, and natural
        apothecary essentials.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
      <aside class="flex flex-col gap-9 lg:sticky lg:top-28">
        <div class="flex flex-col gap-3">
          <label
            for="search-input"
            class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold"
            >Search products</label
          >
          <input
            id="search-input"
            type="text"
            placeholder="Search keywords..."
            class="p-3 border border-brand-border bg-brand-surface text-sm transition-all duration-200 ease-in-out focus:outline-none focus:border-brand-dark w-full"
            :value="listingStore.searchQuery"
            @input="
              listingStore.setSearchQuery(
                ($event.target as HTMLInputElement).value,
              )
            "
          />
        </div>

        <div class="flex flex-col gap-3">
          <span
            class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold"
            >Category</span
          >
          <div class="flex flex-col gap-2">
            <button
              v-for="cat in listingStore.categories"
              :key="cat"
              class="text-left bg-none border-none text-[14px] text-brand-muted cursor-pointer py-1.5 transition-all duration-200 ease-in-out border-l-2 border-transparent pl-2.5 hover:text-brand-dark hover:border-brand-border"
              :class="{
                'text-brand-dark font-medium border-l-brand-gold':
                  listingStore.selectedCategory === cat,
              }"
              @click="listingStore.setSelectedCategory(cat)"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex justify-between items-center">
            <label
              for="price-range"
              class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold"
              >Maximum Price</label
            >
            <span class="text-[14px] font-medium text-brand-dark"
              >${{ listingStore.maxPrice }}</span
            >
          </div>
          <input
            id="price-range"
            type="range"
            min="20"
            max="400"
            step="5"
            class="appearance-none h-[2px] bg-brand-border outline-none w-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-dark [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:bg-brand-gold"
            :value="listingStore.maxPrice"
            @input="
              listingStore.setMaxPrice(
                parseInt(($event.target as HTMLInputElement).value),
              )
            "
          />
          <div class="flex justify-between text-[11px] text-brand-gray">
            <span>$20</span>
            <span>$400</span>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <label
            for="sort-select"
            class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold"
            >Sort Products</label
          >
          <select
            id="sort-select"
            class="p-3 border border-brand-border bg-brand-surface text-sm transition-all duration-200 ease-in-out focus:outline-none focus:border-brand-dark select-field w-full cursor-pointer"
            :value="listingStore.sortBy"
            @change="
              listingStore.setSortBy(($event.target as HTMLInputElement).value)
            "
          >
            <option value="default">Default Catalogue</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </aside>

      <main>
        <div class="flex justify-between items-center mb-6">
          <span class="text-[13px] text-brand-muted">
            Showing {{ listingStore.filteredProducts.length }} results
          </span>
        </div>

        <div
          v-if="listingStore.filteredProducts.length === 0"
          class="text-center py-20 px-6 border border-dashed border-brand-border bg-brand-surface flex flex-col items-center gap-4"
        >
          <p class="font-serif text-xl text-brand-muted italic">
            No products found matching your current filters.
          </p>
          <button
            class="inline-flex items-center justify-center border text-sm tracking-widest uppercase cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] text-brand-dark border-brand-dark hover:bg-brand-dark hover:text-brand-bg py-2 px-4 text-xs"
            @click="listingStore.clearFilters()"
          >
            Clear Filters
          </button>
        </div>

        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <ProductCard
            v-for="product in listingStore.filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </main>
    </div>
  </div>
</template>
