<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useListingStore } from '../stores/listingStore';
import ProductCard from '../components/ProductCard.vue';
import { ArrowRight } from '@lucide/vue';

import apparelCategoryImg from '../assets/linentrenchcoat.png';
import objectsCategoryImg from '../assets/travertine.png';
import scentsCategoryImg from '../assets/perfume.png';

const listingStore = useListingStore();

const featuredProducts = computed(() => {
  return [
    listingStore.products[0],
    listingStore.products[3],
    listingStore.products[6],
  ];
});
</script>

<template>
  <div class="animate-fade-in">
    <section
      class="relative h-[calc(100vh-80px)] min-h-[550px] flex items-center overflow-hidden"
    >
      <div class="absolute inset-0 z-10 w-full h-full">
        <img
          src="../assets/hero_banner.png"
          alt="Muse Lifestyle Banner"
          class="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98]"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-brand-bg/70 via-brand-bg/20 to-transparent z-10 hidden md:block"
        ></div>
      </div>

      <div class="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-8">
        <div
          class="max-w-[480px] bg-brand-bg/90 backdrop-blur-md p-8 md:p-12 border border-brand-border shadow-sm"
        >
          <span
            class="text-[12px] tracking-[0.15em] font-semibold text-brand-gold block mb-4"
            >NEW ARRIVALS</span
          >
          <h1 class="text-4xl md:text-5xl leading-none text-brand-dark mb-5">
            A Study in<br />Minimal Form
          </h1>
          <p class="text-[15px] text-brand-muted leading-relaxed mb-8">
            Thoughtfully crafted apparel, objects, and organic scents that bring
            calm and intentional utility to daily rituals.
          </p>
          <RouterLink
            to="/shop"
            class="inline-flex items-center justify-center border text-sm tracking-widest uppercase cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-brand-dark border-brand-dark text-brand-bg hover:bg-brand-gold hover:border-brand-gold py-3 px-7 inline-flex gap-3 group"
          >
            <span>Explore Collection</span>
            <ArrowRight
              :size="16"
              class="transition-transform duration-200 group-hover:translate-x-1"
              stroke-width="1.5"
            />
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-brand-light border-b border-brand-border">
      <div class="max-w-[760px] text-center mx-auto px-6">
        <span
          class="text-[12px] uppercase tracking-[0.15em] font-semibold text-brand-gold block mb-6"
          >Our Philosophy</span
        >
        <h2
          class="text-3xl md:text-4xl leading-snug mb-6 text-brand-dark italic"
        >
          "Simplicity is not the absence of clutter, but the presence of
          clarity."
        </h2>
        <p class="text-[15px] text-brand-muted leading-relaxed">
          Muse Boutique was born out of a desire for quiet elegance. We
          collaborate with artisans across the globe to bring you raw stone,
          hand-blown glassware, clean textiles, and organic botanical
          extractions that celebrate natural materials. We believe in owning
          fewer things of higher quality.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl w-full mx-auto px-6 md:px-8">
        <span
          class="text-[12px] uppercase tracking-[0.15em] font-semibold text-brand-gold block mb-6"
          >Curated Spaces</span
        >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RouterLink
            to="/shop?category=Apparel"
            class="group relative h-[380px] flex items-end p-8 border border-brand-border overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-zinc-200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              :style="{ backgroundImage: `url(${apparelCategoryImg})` }"
            ></div>
            <div
              class="absolute inset-0 bg-black/25 z-10 transition-colors duration-300 group-hover:bg-black/35"
            ></div>
            <div class="relative z-20 text-brand-bg">
              <h3 class="text-3xl text-brand-bg mb-1.5 font-serif">Apparel</h3>
              <span
                class="text-[12px] uppercase tracking-wider font-medium opacity-85 inline-flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1"
                >Browse Garments</span
              >
            </div>
          </RouterLink>

          <RouterLink
            to="/shop?category=Objects"
            class="group relative h-[380px] flex items-end p-8 border border-brand-border overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-zinc-200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              :style="{ backgroundImage: `url(${objectsCategoryImg})` }"
            ></div>
            <div
              class="absolute inset-0 bg-black/25 z-10 transition-colors duration-300 group-hover:bg-black/35"
            ></div>
            <div class="relative z-20 text-brand-bg">
              <h3 class="text-3xl text-brand-bg mb-1.5 font-serif">Objects</h3>
              <span
                class="text-[12px] uppercase tracking-wider font-medium opacity-85 inline-flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1"
                >Browse Homeware</span
              >
            </div>
          </RouterLink>

          <RouterLink
            to="/shop?category=Scents"
            class="group relative h-[380px] flex items-end p-8 border border-brand-border overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-zinc-200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              :style="{ backgroundImage: `url(${scentsCategoryImg})` }"
            ></div>
            <div
              class="absolute inset-0 bg-black/25 z-10 transition-colors duration-300 group-hover:bg-black/35"
            ></div>
            <div class="relative z-20 text-brand-bg">
              <h3 class="text-3xl text-brand-bg mb-1.5 font-serif">Scents</h3>
              <span
                class="text-[12px] uppercase tracking-wider font-medium opacity-85 inline-flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1"
                >Browse Apothecary</span
              >
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-20 md:pb-28 border-t border-brand-border">
      <div class="max-w-7xl w-full mx-auto px-6 md:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <span
              class="text-[12px] uppercase tracking-[0.15em] font-semibold text-brand-gold block"
              >The Selection</span
            >
            <h2 class="text-3xl md:text-4xl text-brand-dark mt-1 font-serif">
              Selected Pieces
            </h2>
          </div>
          <RouterLink
            to="/shop"
            class="p-0 border-none bg-none uppercase text-xs tracking-wider font-semibold cursor-pointer relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-brand-dark after:scale-x-100 after:origin-left after:transition-all after:duration-400 after:ease-[cubic-bezier(0.25,1,0.5,1)] hover:after:scale-x-0 hover:after:origin-right"
            >View All Products</RouterLink
          >
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>
