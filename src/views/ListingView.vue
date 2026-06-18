<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useListingStore } from '../stores/listingStore'
import ProductCard from '../components/ProductCard.vue'

const listingStore = useListingStore()
const route = useRoute()

const checkQueryParams = () => {
  if (route.query.category) {
    listingStore.setSelectedCategory(route.query.category)
  } else {
    listingStore.setSelectedCategory('All')
  }
}

onMounted(() => {
  checkQueryParams()
})

watch(() => route.query.category, () => {
  checkQueryParams()
})
</script>

<template>
  <div class="max-w-7xl w-full mx-auto px-6 md:px-8 py-10 animate-fade-in">
    <header class="mb-12 border-b border-brand-border pb-8">
      <h1 class="text-4xl md:text-5xl mb-2 font-serif">The Collection</h1>
      <p class="text-[15px] text-brand-muted max-w-[500px] leading-relaxed">
        Carefully designed wardrobe staples, stone objects, and natural apothecary essentials.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
      <aside class="flex flex-col gap-9 lg:sticky lg:top-28">
        <div class="flex flex-col gap-3">
          <label for="search-input" class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold">Search products</label>
          <input 
            id="search-input"
            type="text" 
            placeholder="Search keywords..." 
            class="input-field w-full"
            :value="listingStore.searchQuery"
            @input="listingStore.setSearchQuery($event.target.value)"
          />
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold">Category</span>
          <div class="flex flex-col gap-2">
            <button 
              v-for="cat in listingStore.categories" 
              :key="cat"
              class="text-left bg-none border-none text-[14px] text-brand-muted cursor-pointer py-1.5 transition-fast border-l-2 border-transparent pl-2.5 hover:text-brand-dark hover:border-brand-border"
              :class="{ 'text-brand-dark font-medium border-l-brand-gold': listingStore.selectedCategory === cat }"
              @click="listingStore.setSelectedCategory(cat)"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex justify-between items-center">
            <label for="price-range" class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold">Maximum Price</label>
            <span class="text-[14px] font-medium text-brand-dark">${{ listingStore.maxPrice }}</span>
          </div>
          <input 
            id="price-range"
            type="range" 
            min="20" 
            max="400" 
            step="5"
            class="price-slider w-full"
            :value="listingStore.maxPrice"
            @input="listingStore.setMaxPrice(parseInt($event.target.value))"
          />
          <div class="flex justify-between text-[11px] text-brand-gray">
            <span>$20</span>
            <span>$400</span>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <label for="sort-select" class="text-[11px] uppercase tracking-wider text-brand-muted font-semibold">Sort Products</label>
          <select 
            id="sort-select"
            class="input-field select-field w-full cursor-pointer"
            :value="listingStore.sortBy"
            @change="listingStore.setSortBy($event.target.value)"
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

        <div v-if="listingStore.filteredProducts.length === 0" class="text-center py-20 px-6 border border-dashed border-brand-border bg-brand-surface flex flex-col items-center gap-4">
          <p class="font-serif text-xl text-brand-muted italic">No products found matching your current filters.</p>
          <button 
            class="btn btn-secondary py-2 px-4 text-xs"
            @click="listingStore.searchQuery = ''; listingStore.selectedCategory = 'All'; listingStore.maxPrice = 400"
          >
            Clear Filters
          </button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

<style scoped>
.price-slider {
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  background: var(--color-brand-border);
  outline: none;
}

.price-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-brand-dark);
  cursor: pointer;
  transition: all 0.2s ease;
}

.price-slider::-webkit-slider-thumb:hover {
  background: var(--color-brand-gold);
}
</style>
