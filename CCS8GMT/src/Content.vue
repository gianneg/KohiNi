<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import HomeView from './views/HomeView.vue';
import CaffeinatedCoffee from './components/CaffeinatedCoffee.vue';
import NonCaffeinatedCoffee from './components/NonCaffeinatedCoffee.vue';
</script>

<template>
  <div>
    <main>
      <RouterView />
    </main>
  </div>
    
</template>

<style>
header {
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
}
</style>
