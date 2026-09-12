import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import CheckoutView from "../views/CheckoutView.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
  {
    path: "/",
    redirect: "/about",
  },

  // Contact route
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },

  // Temp testing report popup route
  {
    path: "/report-test",
    name: "report-test",
    component: () => import("../components/ReportPopup.vue"),
  },

  // Temp testing review popup route
  {
    path: "/review-test",
    name: "review-test",
    component: () => import("../components/ReviewPopup.vue"),
  },

  // Temp testing verify identify route
  {
    path: "/verification",
    name: "verification",
    component: () => import("../components/VerifyIdentity.vue"),
    props: { showVerification: true, userType: "worker" },
  },
];
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/login.vue';
import Signup from '@/components/signup.vue';
import Home from '@/components/home.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
