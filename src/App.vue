<script setup>
import signup from './components/signup.vue'
import plumberImage from './assets/stickman plumber.png'
</script>

<template>
  <signup />
  <img :src="plumberImage" alt="Plumber">
</template>