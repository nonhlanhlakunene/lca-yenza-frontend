<script setup>
</script>

<template>
    <router-view />
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
}

body {
    overflow-x: hidden;
    overflow-y: auto;
}

#app {
    width: 100%;
    min-height: 100vh;
    height: auto;
    overflow: visible;
}
</style>