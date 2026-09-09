import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
// import BookingsView from '../views/BookingsView.vue'
import CheckoutView from '..views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/checkout',
      name: "checkout",
      component: CheckoutView,
    }
  ],
})

export default router
