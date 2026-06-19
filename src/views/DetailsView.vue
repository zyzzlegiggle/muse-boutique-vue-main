<script setup lang="ts">
import { onMounted, watch, computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useDetailsStore } from '../stores/detailsStore';
import { ArrowLeft, ShoppingBag } from '@lucide/vue';

const route = useRoute();
const detailsStore = useDetailsStore();

const product = computed(() => detailsStore.activeProduct);
const selectedVariant = computed(() => detailsStore.selectedVariant);

const loadActiveProduct = () => {
  const id = Number(
    Array.isArray(route.params.id) ? route.params.id[0] : route.params.id,
  );
  if (!isNaN(id)) {
    detailsStore.loadProduct(id);
  }
};

watch(
  () => route.params.id,
  () => {
    loadActiveProduct();
  },
);

const selectVariant = (variant: string) => {
  detailsStore.setSelectedVariant(variant);
};

const addToCart = () => {
  if (product.value) {
    detailsStore.addToCart(product.value, selectedVariant.value);
  }
};

loadActiveProduct();
</script>

<template>
  <div class="max-w-7xl w-full mx-auto px-6 md:px-8 py-10 animate-fade-in">
    <div class="mb-10">
      <RouterLink
        to="/shop"
        class="inline-flex items-center gap-2 text-[13px] uppercase tracking-wider text-brand-muted font-semibold hover:text-brand-dark transition-transform hover:-translate-x-1 duration-200"
      >
        <ArrowLeft :size="16" stroke-width="1.5" />
        <span>Back to collection</span>
      </RouterLink>
    </div>

    <div
      v-if="product"
      class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start"
    >
      <section class="w-full">
        <div
          class="aspect-[4/5] w-full bg-brand-light border border-brand-border flex items-center justify-center overflow-hidden p-0"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-full object-cover"
          />
        </div>
      </section>

      <section class="flex flex-col">
        <span
          class="text-[12px] uppercase tracking-widest text-brand-gray mb-2 font-semibold"
          >{{ product.category }}</span
        >

        <h1
          class="text-4xl lg:text-5xl leading-none text-brand-dark mb-1 font-serif"
        >
          {{ product.title }}
        </h1>
        <p class="text-base text-brand-muted italic mb-4 font-serif">
          {{ product.subtitle }}
        </p>
        <span class="text-2xl font-medium text-brand-dark mb-6 block"
          >${{ product.price }}</span
        >

        <p class="text-[15px] text-brand-muted leading-relaxed mb-8">
          {{ product.description }}
        </p>

        <div
          class="mb-8 flex flex-col gap-3"
          v-if="product.variants && product.variants.length > 0"
        >
          <span
            class="text-[12px] uppercase tracking-wider text-brand-muted font-semibold"
            >Select {{ product.variantLabel }}</span
          >
          <div class="flex flex-wrap gap-2.5">
            <button
              v-for="v in product.variants"
              :key="v"
              class="bg-none border border-brand-border px-5 py-2.5 text-[13px] cursor-pointer transition-all duration-200 ease-in-out min-w-[60px] hover:border-brand-dark"
              :class="{
                'border-brand-dark bg-brand-dark text-brand-bg':
                  selectedVariant === v,
              }"
              @click="selectVariant(v)"
            >
              {{ v }}
            </button>
          </div>
        </div>

        <button
          class="w-full mb-10 flex gap-2.5 inline-flex items-center justify-center border text-sm tracking-widest uppercase cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-brand-dark border-brand-dark text-brand-bg hover:bg-brand-gold hover:border-brand-gold py-3 px-7"
          @click="addToCart"
        >
          <ShoppingBag :size="16" stroke-width="1.5" />
          <span>Add to Bag</span>
        </button>

        <div class="border-t border-brand-border">
          <details class="border-b border-brand-border group" open>
            <summary
              class="py-5 text-sm uppercase tracking-wider font-semibold cursor-pointer text-brand-dark hover:text-brand-gold select-none outline-none transition-all duration-200 ease-in-out list-none flex justify-between items-center [&::-webkit-details-marker]:hidden"
            >
              <span>Details</span>
              <span
                class="text-xs transition-transform duration-300 group-open:rotate-180"
                >↓</span
              >
            </summary>
            <div class="pb-6 text-sm text-brand-muted leading-relaxed">
              <p>{{ product.details }}</p>
            </div>
          </details>

          <details class="border-b border-brand-border group">
            <summary
              class="py-5 text-sm uppercase tracking-wider font-semibold cursor-pointer text-brand-dark hover:text-brand-gold select-none outline-none transition-all duration-200 ease-in-out list-none flex justify-between items-center [&::-webkit-details-marker]:hidden"
            >
              <span>Specifications</span>
              <span
                class="text-xs transition-transform duration-300 group-open:rotate-180"
                >↓</span
              >
            </summary>
            <div class="pb-6 text-sm text-brand-muted leading-relaxed">
              <ul class="flex flex-col gap-2">
                <li
                  v-for="spec in product.specs"
                  :key="spec"
                  class="relative pl-3.5 before:content-['—'] before:absolute before:left-0 before:text-brand-gray"
                >
                  {{ spec }}
                </li>
              </ul>
            </div>
          </details>

          <details class="border-b border-brand-border group">
            <summary
              class="py-5 text-sm uppercase tracking-wider font-semibold cursor-pointer text-brand-dark hover:text-brand-gold select-none outline-none transition-all duration-200 ease-in-out list-none flex justify-between items-center [&::-webkit-details-marker]:hidden"
            >
              <span>Shipping & Returns</span>
              <span
                class="text-xs transition-transform duration-300 group-open:rotate-180"
                >↓</span
              >
            </summary>
            <div class="pb-6 text-sm text-brand-muted leading-relaxed">
              <p>
                We ship globally using carbon-neutral carrier services. Standard
                deliveries arrive in 3-5 business days. We offer free shipping
                on orders over $250. Unworn apparel and unboxed home objects can
                be returned within 14 days of delivery.
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>

    <div
      v-else
      class="text-center py-24 px-6 max-w-[500px] mx-auto flex flex-col items-center gap-5"
    >
      <h2 class="text-3xl font-serif">Product Not Found</h2>
      <p class="text-brand-muted">
        We couldn't load the product you are looking for.
      </p>
      <RouterLink
        to="/shop"
        class="inline-flex items-center justify-center border text-sm tracking-widest uppercase cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-brand-dark border-brand-dark text-brand-bg hover:bg-brand-gold hover:border-brand-gold py-3 px-7"
      >
        Return to Collection
      </RouterLink>
    </div>
  </div>
</template>
