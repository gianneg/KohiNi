<template>
  <div class="container">
    <nav class="navbar">
      <div class="mobile-left">
        <div class="hamburger" @click="toggleMenu">☰</div>
        <div class="logo">Placeholder</div>
      </div>
  
      <!-- Overlay to close menu when clicking outside -->
      <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>
  
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: isMenuOpen }">
        <button class="close-btn" @click="toggleMenu">✖</button>
  
        <div class="nav-links">
          <span @click="navigateTo('/about')">About Us</span>
          <span @click="navigateTo('/contact')">Contact Us</span>
          <span @click="navigateTo('/faq')">Frequently Asked Questions</span>
          <span @click="navigateTo('/site-map')">Site Map</span>
          <span @click="navigateTo('/recipes/CaffeinatedCoffee')">Caffeine Recipes</span>
          <span @click="navigateTo('/recipes/NonCaffeinatedDrinks')">Non-Caffeine Recipes</span>
        </div>
      </div>
    </nav>
  </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      navigateTo(route) {
        this.$router.push(route);
        this.isMenuOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  @import "./NavBarMobile.css";
  </style>
  