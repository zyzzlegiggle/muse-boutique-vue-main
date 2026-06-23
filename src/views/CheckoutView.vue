<script setup lang="ts">
import { CheckoutFormValues, checkoutSchema } from '../schemas/checkoutSchema';
import { useDetailsStore } from '../stores/detailsStore';
import { useField, useForm } from 'vee-validate';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeft, CreditCard, ShieldCheck } from 'lucide-vue-next';

const detailsStore = useDetailsStore();
const router = useRouter();

const cartItems = computed(() => detailsStore.cart);
const subtotal = computed(() => detailsStore.cartSubtotal);
const checkoutSuccess = computed(() => detailsStore.checkoutSuccess);

const { handleSubmit, errors, isSubmitting } = useForm<CheckoutFormValues>({
  validationSchema: checkoutSchema,
});

// register field bindings
const { value: email } = useField<string>('email');
const { value: fullName } = useField<string>('fullName');
const { value: address } = useField<string>('address');
const { value: city } = useField<string>('city');
const { value: postalCode } = useField<string>('postalCode');
const { value: cardNumber } = useField<string>('cardNumber');
const { value: expiry } = useField<string>('expiry');
const { value: cvv } = useField<string>('cvv');

// handle form submit
const onSubmit = handleSubmit((values) => {
  console.log('Valid Checkout Submission:', values);
  detailsStore.checkout();
});

const handleContinueShopping = () => {
  detailsStore.resetCheckoutStatus();
  router.push('/shop');
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 md:py-20 mt-16">
    <!-- Success Page -->
    <div
      v-if="checkoutSuccess"
      class="max-w-lg mx-auto text-center py-16 px-6 bg-brand-surface border border-brand-border"
    >
      <div
        class="w-16 h-16 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center text-3xl mx-auto mb-6"
      >
        ✓
      </div>
      <h1 class="text-3xl font-serif mb-4">Order Confirmed!</h1>
      <p class="text-brand-muted mb-8 leading-relaxed">
        Thank you for your purchase. We have received your order and are
        preparing your curated essentials.
      </p>
      <button
        @click="handleContinueShopping"
        class="bg-brand-dark text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-gold transition-colors duration-300"
      >
        Continue Shopping
      </button>
    </div>
    <!-- Empty Checkout State -->
    <div
      v-else-if="cartItems.length === 0"
      class="max-w-lg mx-auto text-center py-16"
    >
      <h1 class="text-2xl font-serif mb-4 italic text-brand-muted">
        Your shopping bag is empty.
      </h1>
      <router-link
        to="/shop"
        class="inline-block bg-brand-dark text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-gold transition-colors duration-300"
      >
        Go to Shop
      </router-link>
    </div>
    <!-- Checkout Form & Order Summary -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <!-- Form Column -->
      <div class="lg:col-span-7">
        <router-link
          to="/shop"
          class="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-dark mb-8 transition-colors"
        >
          <ArrowLeft :size="16" />
          <span>Return to shop</span>
        </router-link>
        <h1 class="text-3xl font-serif mb-8">Checkout</h1>
        <form @submit="onSubmit" class="space-y-8">
          <!-- Contact Information -->
          <div>
            <h2
              class="text-lg font-serif mb-4 border-b border-brand-border pb-2"
            >
              1. Contact Information
            </h2>
            <div class="space-y-4">
              <div>
                <label
                  for="email"
                  class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                  >Email Address</label
                >
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                  :class="{ 'border-red-500': errors.email }"
                  placeholder="name@example.com"
                />
                <span
                  v-if="errors.email"
                  class="text-xs text-red-500 mt-1 block"
                  >{{ errors.email }}</span
                >
              </div>
            </div>
          </div>
          <!-- Shipping Address -->
          <div>
            <h2
              class="text-lg font-serif mb-4 border-b border-brand-border pb-2"
            >
              2. Shipping Address
            </h2>
            <div class="space-y-4">
              <div>
                <label
                  for="fullName"
                  class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                  >Full Name</label
                >
                <input
                  id="fullName"
                  v-model="fullName"
                  type="text"
                  class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                  :class="{ 'border-red-500': errors.fullName }"
                  placeholder="Jane Doe"
                />
                <span
                  v-if="errors.fullName"
                  class="text-xs text-red-500 mt-1 block"
                  >{{ errors.fullName }}</span
                >
              </div>
              <div>
                <label
                  for="address"
                  class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                  >Street Address</label
                >
                <input
                  id="address"
                  v-model="address"
                  type="text"
                  class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                  :class="{ 'border-red-500': errors.address }"
                  placeholder="123 Curated Way"
                />
                <span
                  v-if="errors.address"
                  class="text-xs text-red-500 mt-1 block"
                  >{{ errors.address }}</span
                >
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="city"
                    class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                    >City</label
                  >
                  <input
                    id="city"
                    v-model="city"
                    type="text"
                    class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                    :class="{ 'border-red-500': errors.city }"
                    placeholder="New York"
                  />
                  <span
                    v-if="errors.city"
                    class="text-xs text-red-500 mt-1 block"
                    >{{ errors.city }}</span
                  >
                </div>
                <div>
                  <label
                    for="postalCode"
                    class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                    >Postal Code</label
                  >
                  <input
                    id="postalCode"
                    v-model="postalCode"
                    type="text"
                    class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                    :class="{ 'border-red-500': errors.postalCode }"
                    placeholder="10001"
                  />
                  <span
                    v-if="errors.postalCode"
                    class="text-xs text-red-500 mt-1 block"
                    >{{ errors.postalCode }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Payment Details -->
          <div>
            <h2
              class="text-lg font-serif mb-4 border-b border-brand-border pb-2 flex items-center gap-2"
            >
              <CreditCard :size="18" />
              <span>3. Payment Method</span>
            </h2>
            <div class="space-y-4">
              <div>
                <label
                  for="cardNumber"
                  class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                  >Card Number</label
                >
                <input
                  id="cardNumber"
                  v-model="cardNumber"
                  type="text"
                  maxlength="16"
                  class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                  :class="{ 'border-red-500': errors.cardNumber }"
                  placeholder="1234567812345678"
                />
                <span
                  v-if="errors.cardNumber"
                  class="text-xs text-red-500 mt-1 block"
                  >{{ errors.cardNumber }}</span
                >
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="expiry"
                    class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                    >Expiry Date</label
                  >
                  <input
                    id="expiry"
                    v-model="expiry"
                    type="text"
                    placeholder="MM/YY"
                    class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                    :class="{ 'border-red-500': errors.expiry }"
                  />
                  <span
                    v-if="errors.expiry"
                    class="text-xs text-red-500 mt-1 block"
                    >{{ errors.expiry }}</span
                  >
                </div>
                <div>
                  <label
                    for="cvv"
                    class="block text-xs uppercase tracking-wider text-brand-muted mb-2"
                    >CVV</label
                  >
                  <input
                    id="cvv"
                    v-model="cvv"
                    type="text"
                    maxlength="4"
                    placeholder="123"
                    class="w-full border border-brand-border bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:border-brand-dark"
                    :class="{ 'border-red-500': errors.cvv }"
                  />
                  <span
                    v-if="errors.cvv"
                    class="text-xs text-red-500 mt-1 block"
                    >{{ errors.cvv }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 bg-brand-dark text-white uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {{ isSubmitting ? 'Processing...' : `Pay $${subtotal}` }}
          </button>
        </form>
      </div>
      <!-- Order Summary Column -->
      <div
        class="lg:col-span-5 bg-brand-surface p-6 border border-brand-border h-fit"
      >
        <h2 class="text-xl font-serif mb-6 pb-2 border-b border-brand-border">
          Order Summary
        </h2>
        <div class="divide-y divide-brand-border mb-6">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div
              class="w-16 h-20 bg-brand-light border border-brand-border flex items-center justify-center overflow-hidden"
            >
              <img
                :src="item.product.image"
                :alt="item.product.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h4 class="text-sm font-medium text-brand-dark leading-tight">
                  {{ item.product.title }}
                </h4>
                <p class="text-xs text-brand-muted mt-1" v-if="item.variant">
                  {{ item.product.variantLabel }}: {{ item.variant }}
                </p>
              </div>
              <div
                class="flex justify-between items-center text-xs text-brand-muted mt-2"
              >
                <span>Qty: {{ item.quantity }}</span>
                <span class="font-medium text-brand-dark"
                  >${{ item.product.price * item.quantity }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-3 pt-4 border-t border-brand-border text-sm">
          <div class="flex justify-between text-brand-muted">
            <span>Subtotal</span>
            <span>${{ subtotal }}</span>
          </div>
          <div class="flex justify-between text-brand-muted">
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div
            class="flex justify-between text-brand-dark font-medium text-base pt-3 border-t border-brand-border"
          >
            <span>Total</span>
            <span>${{ subtotal }}</span>
          </div>
        </div>
        <div
          class="mt-8 flex items-center justify-center gap-2 text-xs text-brand-muted"
        >
          <ShieldCheck :size="14" class="text-brand-gold" />
          <span>Secure checkout processed by Muse</span>
        </div>
      </div>
    </div>
  </div>
</template>
