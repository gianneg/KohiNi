<template>
    <nav class="navbar">
      <!-- Left Links -->
      <div class="nav-links">
        <div class="dropdown" @click.stop="toggleDropdown('about')">
          <button class="nav-item">ABOUT</button>
          <div v-if="openDropdown === 'about'" class="dropdown-menu">
            <span @click="navigateTo('/about')">About Us</span>
            <span @click="navigateTo('/contact')">Contact Us</span>
            <span @click="navigateTo('/faq')">Frequently Asked Questions</span>
            <span @click="navigateTo('/site-map')">Site Map</span>
          </div>
        </div>
  
        <div class="dropdown" @click.stop="toggleDropdown('recipes')">
          <button class="nav-item">RECIPES</button>
          <div v-if="openDropdown === 'recipes'" class="dropdown-menu">
            <span @click="navigateTo('/CaffeinatedCoffee')">Caffeine</span>
            <span @click="navigateTo('/NonCaffeinatedCoffee')">Non-Caffeine</span>
          </div>
        </div>
      </div>
  
      <!-- Logo -->
      <div class="logo">Placeholder</div>
  
      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        openDropdown: null, // Track which dropdown is open
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
        this.openDropdown = null; // Close dropdown after navigation
      },
      toggleDropdown(menu) {
        // If clicking the same menu, close it, otherwise open the new one
        this.openDropdown = this.openDropdown === menu ? null : menu;
      },
      closeDropdown(event) {
        // Ensure clicks outside the dropdown close it
        if (!event.target.closest(".dropdown")) {
          this.openDropdown = null;
        }
      },
    },
    mounted() {
      document.addEventListener("click", this.closeDropdown);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.closeDropdown);
    },
  };
  </script>
  
  <style scoped>
  @import './NavBarBase.css';
  </style>
  