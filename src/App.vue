<script setup>
import Header from './components/Header.vue'
import CartDrawer from './components/CartDrawer.vue'
</script>

<template>
  <div class="app-wrapper">
    <Header />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <CartDrawer />

    <footer class="main-footer">
      <div class="max-w-7xl mx-auto px-6 md:px-8 footer-grid">
        <div class="footer-brand">
          <h2 class="footer-logo">MUSE</h2>
          <p class="footer-tagline">Curated luxury garments, objects, and scents for modern living. Designed in harmony, crafted to endure.</p>
        </div>
        
        <div class="footer-links-col">
          <h3 class="footer-title">Collection</h3>
          <ul class="footer-links">
            <li><router-link to="/shop">All Products</router-link></li>
            <li><router-link to="/shop?category=Apparel">Apparel</router-link></li>
            <li><router-link to="/shop?category=Objects">Home Objects</router-link></li>
            <li><router-link to="/shop?category=Scents">Scents</router-link></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h3 class="footer-title">Boutique</h3>
          <ul class="footer-links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="footer-newsletter">
          <h3 class="footer-title">Journal Newsletter</h3>
          <p class="newsletter-text">Subscribe to receive seasonal collection previews and editorial journals.</p>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Your email address" class="input-field newsletter-input" aria-label="Email for newsletter" required />
            <button type="submit" class="btn btn-primary newsletter-btn">Join</button>
          </form>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 md:px-8 footer-bottom">
        <span class="copyright">© 2026 Muse Boutique. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<style>
/* Reset App layouts */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Footer Styling */
.main-footer {
  background-color: var(--color-surface-hover);
  border-top: 1px solid var(--color-border);
  padding: 80px 0 40px 0;
  margin-top: 80px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 48px;
  margin-bottom: 60px;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.footer-logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  margin-bottom: 16px;
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  max-width: 280px;
  line-height: 1.6;
}

.footer-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.footer-links a:hover {
  color: var(--color-text-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.newsletter-text {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.newsletter-form {
  display: flex;
  gap: 8px;
}

.newsletter-input {
  flex: 1;
  font-size: 0.8125rem;
  padding: 10px 14px;
}

.newsletter-btn {
  padding: 10px 20px;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

@media (max-width: 600px) {
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}
</style>
