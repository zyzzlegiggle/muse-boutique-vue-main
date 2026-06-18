<script setup>
import { computed } from 'vue'
import { useDetailsStore } from '../stores/detailsStore'
import { X, Plus, Minus, Trash2, ArrowRight } from '@lucide/vue'

const detailsStore = useDetailsStore()

const isOpen = computed(() => detailsStore.cartOpen)
const cartItems = computed(() => detailsStore.cart)
const subtotal = computed(() => detailsStore.cartSubtotal)
const checkoutSuccess = computed(() => detailsStore.checkoutSuccess)

const closeCart = () => {
  detailsStore.toggleCart(false)
}

const updateQty = (id, currentQty, amount) => {
  detailsStore.updateQuantity(id, currentQty + amount)
}

const removeItem = (id) => {
  detailsStore.removeFromCart(id)
}

const checkout = () => {
  detailsStore.checkout()
}

const resetStatus = () => {
  detailsStore.resetCheckoutStatus()
}
</script>

<template>
  <div>
    <div 
      class="fixed inset-0 bg-black/15 backdrop-blur-[4px] z-[1000] transition-opacity duration-500"
      :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeCart"
    ></div>

    <div 
      class="fixed top-0 right-0 w-full max-w-[450px] h-full bg-brand-surface shadow-2xl z-[1001] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-6 border-b border-brand-border flex justify-between items-center">
        <h2 class="text-2xl font-serif">Shopping Bag</h2>
        <button class="bg-none border-none cursor-pointer p-2 text-brand-dark hover:text-brand-gold transition-fast flex items-center justify-center" @click="closeCart" aria-label="Close bag">
          <X :size="20" stroke-width="1.5" />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <div v-if="checkoutSuccess" class="flex flex-col items-center justify-center text-center h-[80%] px-4">
          <div class="w-12 h-12 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center text-2xl mb-5">✓</div>
          <h3 class="text-2xl mb-3 font-serif">Order Confirmed</h3>
          <p class="text-sm text-brand-muted mb-6 leading-relaxed">
            Thank you for shopping at Muse. Your order has been registered in our simulated storefront. Your curated selection is on its way.
          </p>
          <button class="btn btn-primary" @click="resetStatus">
            Continue Shopping
          </button>
        </div>

        <div v-else-if="cartItems.length === 0" class="flex flex-col items-center justify-center text-center h-[80%] px-4">
          <p class="font-serif text-xl text-brand-muted mb-6 italic">Your shopping bag is currently empty.</p>
          <button class="btn btn-secondary" @click="closeCart">
            Discover Products
          </button>
        </div>

        <div v-else class="flex flex-col gap-6">
          <div v-for="item in cartItems" :key="item.id" class="flex gap-4 pb-6 border-b border-brand-border last:border-b-0 last:pb-0">
            <div class="w-20 h-[100px] bg-brand-light border border-brand-border flex items-center justify-center overflow-hidden shrink-0 p-0">
              <img :src="item.product.image" :alt="item.product.title" class="w-full h-full object-cover" />
            </div>
            
            <div class="flex-grow flex flex-col">
              <div class="flex justify-between items-center mb-1">
                <span class="text-[11px] uppercase tracking-wider text-brand-gray">{{ item.product.category }}</span>
                <button class="bg-none border-none text-brand-gray hover:text-red-600 cursor-pointer p-1 flex items-center justify-center transition-fast" @click="removeItem(item.id)" aria-label="Remove item">
                  <Trash2 :size="14" stroke-width="1.5" />
                </button>
              </div>
              
              <h4 class="font-sans text-[15px] font-medium text-brand-dark mb-0.5">{{ item.product.title }}</h4>
              
              <div class="text-xs text-brand-muted mb-3" v-if="item.variant">
                {{ item.product.variantLabel }}: {{ item.variant }}
              </div>
              
              <div class="flex justify-between items-center mt-auto">
                <div class="flex items-center border border-brand-border bg-brand-bg">
                  <button 
                    class="bg-none border-none cursor-pointer w-7 h-7 flex items-center justify-center text-brand-muted hover:text-brand-dark hover:bg-brand-border/40 disabled:opacity-30 disabled:cursor-not-allowed transition-fast" 
                    @click="updateQty(item.id, item.quantity, -1)"
                    :disabled="item.quantity <= 1"
                  >
                    <Minus :size="12" stroke-width="1.5" />
                  </button>
                  <span class="text-[13px] w-6 text-center">{{ item.quantity }}</span>
                  <button 
                    class="bg-none border-none cursor-pointer w-7 h-7 flex items-center justify-center text-brand-muted hover:text-brand-dark hover:bg-brand-border/40 transition-fast" 
                    @click="updateQty(item.id, item.quantity, 1)"
                  >
                    <Plus :size="12" stroke-width="1.5" />
                  </button>
                </div>
                
                <span class="text-[15px] font-medium text-brand-dark">${{ item.product.price * item.quantity }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cartItems.length > 0 && !checkoutSuccess" class="p-6 border-t border-brand-border bg-brand-hover">
        <div class="flex justify-between items-center text-base font-medium mb-2">
          <span>Subtotal</span>
          <span class="text-lg">${{ subtotal }}</span>
        </div>
        <p class="text-xs text-brand-muted mb-5">Shipping and taxes calculated at checkout.</p>
        
        <button class="w-full flex justify-center items-center gap-3 py-3 text-sm tracking-widest uppercase font-semibold border bg-brand-dark border-brand-dark text-brand-bg hover:bg-brand-gold hover:border-brand-gold transition-smooth group" @click="checkout">
          <span>Checkout</span>
          <ArrowRight :size="16" stroke-width="1.5" class="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </div>
</template>
