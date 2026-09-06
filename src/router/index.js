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
  history: createWebHistory(),
  routes
});

export default router;
