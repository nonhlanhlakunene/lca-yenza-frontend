<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

import {RouterView } from 'vue-router'
 

</script>


<template>
  <div id="app">
    <NavBar />

    <RouterView />

    <Footer />
  </div>
</template>


