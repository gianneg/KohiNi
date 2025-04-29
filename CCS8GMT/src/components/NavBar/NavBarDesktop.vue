<template>
  <div class="container">
    <nav class="navbar">
      <!-- Left Links -->
      <div class="nav-links">
        <div class="dropdown" @click.stop="toggleDropdown('about')">
          <button class="nav-item"><div class="drpdwn">ABOUT <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></div></button>
          <div v-if="openDropdown === 'about'" class="dropdown-menu">
            <span @click="navigateTo('/about')">About Us</span>
            <span @click="navigateTo('/contact')">Contact Us</span>
            <span @click="navigateTo('/faq')">Frequently Asked Questions</span>
            <span @click="navigateTo('/site-map')">Site Map</span>
          </div>
        </div>
  
        <div class="dropdown" @click.stop="toggleDropdown('recipes')">
          <button class="nav-item"><div class="drpdwn">RECIPES <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></div></button>
          <div v-if="openDropdown === 'recipes'" class="dropdown-menu">
            <span @click="navigateTo('/CaffeinatedCoffee')">Caffeine</span>
            <span @click="navigateTo('/NonCaffeinatedDrinks')">Non-Caffeine</span>
          </div>
        </div>
      </div>
  
      <!-- Logo -->
      <div class="logo"><span class="logo-name" @click="navigateTo('/')">Placeholder</span></div>
  
      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button class="search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></button>
      </div>
    </nav>
  </div>
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
  