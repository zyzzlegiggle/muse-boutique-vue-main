<script setup lang="ts">
import Header from './components/Header.vue'
import CartDrawer from './components/CartDrawer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition 
          enter-active-class="transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
          leave-active-class="transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
          enter-from-class="opacity-0 translate-y-1.5"
          leave-to-class="opacity-0 -translate-y-1.5"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <CartDrawer />

    <footer class="bg-brand-hover border-t border-brand-border pt-20 pb-10 mt-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] lg:gap-12 mb-15">
        <div>
          <h2 class="font-serif text-2xl tracking-[0.2em] mb-4">MUSE</h2>
          <p class="text-sm text-brand-muted max-w-[280px] leading-relaxed">Curated luxury garments, objects, and scents for modern living. Designed in harmony, crafted to endure.</p>
        </div>
        
        <div>
          <h3 class="text-xs uppercase tracking-wider font-semibold mb-5 text-brand-dark">Collection</h3>
          <ul class="list-none flex flex-col gap-3">
            <li><router-link to="/shop" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">All Products</router-link></li>
            <li><router-link to="/shop?category=Apparel" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Apparel</router-link></li>
            <li><router-link to="/shop?category=Objects" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Home Objects</router-link></li>
            <li><router-link to="/shop?category=Scents" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Scents</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-wider font-semibold mb-5 text-brand-dark">Boutique</h3>
          <ul class="list-none flex flex-col gap-3">
            <li><a href="#" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Our Story</a></li>
            <li><a href="#" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Sustainability</a></li>
            <li><a href="#" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Journal</a></li>
            <li><a href="#" class="text-sm text-brand-muted hover:text-brand-dark hover:underline underline-offset-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-wider font-semibold mb-5 text-brand-dark">Journal Newsletter</h3>
          <p class="text-sm text-brand-muted mb-4">Subscribe to receive seasonal collection previews and editorial journals.</p>
          <form class="flex gap-2" @submit.prevent>
            <input type="email" placeholder="Your email address" class="border border-brand-border bg-brand-surface transition-all duration-200 ease-in-out focus:outline-none focus:border-brand-dark flex-1 text-[13px] py-2.5 px-3.5" aria-label="Email for newsletter" required />
            <button type="submit" class="inline-flex items-center justify-center border text-sm tracking-widest uppercase cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] bg-brand-dark border-brand-dark text-brand-bg hover:bg-brand-gold hover:border-brand-gold py-2.5 px-5">Join</button>
          </form>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 md:px-8 border-t border-brand-border pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 text-xs text-brand-gray">
        <span>© 2026 Muse Boutique. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>
