<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Homepage from './components/Homepage.vue'
import ContentPage from './components/ContentPage.vue'
import Header from './Header.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <RouterView />
</template>

<style>
header {
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
}
</style>
