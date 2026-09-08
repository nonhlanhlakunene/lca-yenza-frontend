import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Contact route
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },

    // Temp testing report popup route
    {
      path:'/report-test',
      name: 'report-test',
      component: () => import ('../components/ReportPopup.vue'),
    },


    // Temp testing review popup route
    {
      path:'/review-test',
      name: 'review-test',
      component: () => import ('../components/ReviewPopup.vue'),
    }
  ],
})

export default router
