<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Homepage from './components/Homepage/Homepage.vue'
import ContentPage from './components/ContentPage/ContentPage.vue'
import Header from './Header.vue';
import NavBar from './components/NavBar/NavBar.vue';
import FooterDesktop from './components/Footer/FooterDesktop.vue';
</script>

<template>
  <div class="container">
    <RouterView />
    <FooterDesktop/>
  </div>
  
</template>

<style>
header {
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
}

.container {
  width: 100%;
  max-width: 200vw;
  justify-self: center;
}
</style>
