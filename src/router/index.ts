import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListingView from '../views/ListingView.vue';
import DetailsView from '../views/DetailsView.vue';
import CheckoutView from '../views/CheckoutView.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Muse Boutique | Curated Essentials' },
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ListingView,
    meta: { title: 'Shop the Collection | Muse Boutique' },
  },
  {
    path: '/shop/:id',
    name: 'ProductDetails',
    component: DetailsView,
    meta: { title: 'Product Details | Muse Boutique' },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView,
    meta: { title: 'Checkout | Muse Boutique' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Muse Boutique';
  document.title = to.meta.title || defaultTitle;
  next();
});

export default router;
