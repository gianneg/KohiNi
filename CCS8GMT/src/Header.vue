<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
</template>

<style>
header {
    width: 1280px;
    line-height: 1.5;
    max-height: 100vh;
}

@media (min-width: 1200px) {
    header {
    width: 1100px;
    }
}
</style>
