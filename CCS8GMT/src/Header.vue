<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
</template>

<style>
header {
    margin-top: 0px;
    width: 100%;
    justify-self: center;
    max-height: 100vh;
}
</style>
