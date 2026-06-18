import { defineStore } from 'pinia'
import { useListingStore } from './listingStore'
import { CartItem, Product } from '@/types'



export const useDetailsStore = defineStore('details', {
  state: () => ({
    activeProduct: null as Product | null,
    selectedVariant: '' as string,
    cart: [] as CartItem[],
    cartOpen: false as boolean,
    checkoutSuccess: false as boolean
  }),
  getters: {
    cartSubtotal(state) {
      return state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
    },
    cartItemsCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    }
  },
  actions: {
    loadProduct(id: number | string) {
      const listingStore = useListingStore()
      const product = listingStore.products.find(p => p.id === parseInt(id.toString()))
      if (product) {
        this.activeProduct = product
        this.selectedVariant = product.variants[0] || ''
        this.checkoutSuccess = false
      } else {
        this.activeProduct = null
        this.selectedVariant = ''
      }
    },
    setSelectedVariant(variant: string) {
      this.selectedVariant = variant
    },
    toggleCart(forceState?: boolean) {
      if (typeof forceState === 'boolean') {
        this.cartOpen = forceState
      } else {
        this.cartOpen = !this.cartOpen
      }
    },
    addToCart(product: Product, variant?: string) {
      const variantToUse = variant || this.selectedVariant || (product.variants && product.variants[0]) || ''
      const existingItem = this.cart.find(
        item => item.product.id === product.id && item.variant === variantToUse
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({
          id: Date.now() + Math.random().toString(36).substring(2, 7),
          product,
          variant: variantToUse,
          quantity: 1
        })
      }
      this.checkoutSuccess = false
      this.cartOpen = true
    },
    removeFromCart(cartItemId: string) {
      const index = this.cart.findIndex(item => item.id === cartItemId)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
    },
    updateQuantity(cartItemId: string, quantity: number | string) {
      const item = this.cart.find(item => item.id === cartItemId)
      if (item) {
        item.quantity = Math.max(1, parseInt(quantity.toString()))
      }
    },
    checkout() {
      if (this.cart.length === 0) return
      this.checkoutSuccess = true
      this.cart = []
    },
    resetCheckoutStatus() {
      this.checkoutSuccess = false
    }
  }
})
