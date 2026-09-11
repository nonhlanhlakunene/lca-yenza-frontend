<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <NavBar v-if="$route.path !== '/login' && $route.path !== '/signup'" />

    <RouterView />

    <Footer />
  </div>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    height: auto !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
}

#app {
    width: 100%;
    min-height: 100vh;
    height: auto !important;
    overflow: visible !important;
}
</style>