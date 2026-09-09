import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/',
    redirect: '/about'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router