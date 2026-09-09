<template>
  <nav class="home-navbar">
    <ul class="navbar-links">
      <li v-for="(link, index) in navLinks" v-bind:key="index">
        <a v-bind:href="link.url">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// 1. We create a simple list (Array) containing each navigation link name and URL
const linkList = [
  { text: 'Home', url: '#home' },
  { text: 'Services', url: '#services' },
  { text: 'About Us', url: '#about' },
  { text: 'Reviews', url: '#reviews' },
  { text: 'Bookings', url: '#bookings' },
  { text: 'Contact', url: '#contact' }
]

// 2. We wrap our list in ref() so Vue can manage it reactively
const navLinks = ref(linkList)
</script>

<style scoped>
/* 
  We replaced static colors and padding with your CSS root variables:
  - background: var(--color-primary)
  - color: var(--color-page)
  - padding: var(--spacing-sm) var(--spacing-md)
*/

.home-navbar {
  background-color: var(--color-primary);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
}

.navbar-links {
  gap: var(--spacing-md);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: var(--color-page);
  text-decoration: none;
  font-size: var(--font-sm);
  transition: opacity 0.3s ease;
}

.navbar-links a:hover {
  opacity: 0.8;
}

/* Mobile Layout Adjustment */
@media (max-width: 768px) {
  .home-navbar {
    flex-direction: column;
    justify-content: center;
  }

  .navbar-links {
    flex-direction: column;
    gap: var(--spacing-xs);
    margin: var(--spacing-xs) 0;
    text-align: center;
  }
}
</style>