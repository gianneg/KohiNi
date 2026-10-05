<template>
    <nav class="navbar" aria-label="Main">
      <!-- Left Links -->
      <div class="nav-links">
        <div class="dropdown" @click.stop="toggleDropdown('about')">
          <button class="nav-item" :class="{ open: openDropdown === 'about' }"><div class="drpdwn">About <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></div></button>
          <div v-if="openDropdown === 'about'" class="dropdown-menu">
            <span @click="navigateTo('/about')">About Us</span>
            <span @click="navigateTo('/contact')">Contact Us</span>
            <span @click="navigateTo('/faq')">Frequently Asked Questions</span>
          </div>
        </div>
  
        <div class="dropdown" @click.stop="toggleDropdown('recipes')">
          <button class="nav-item" :class="{ open: openDropdown === 'recipes' }"><div class="drpdwn">Recipes <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></div></button>
          <div v-if="openDropdown === 'recipes'" class="dropdown-menu">
            <span @click="navigateTo('/CaffeinatedCoffee')">Caffeine</span>
            <span @click="navigateTo('/NonCaffeinatedDrinks')">Non-Caffeine</span>
          </div>
        </div>
      </div>
  
      <!-- Logo -->
      <div class="logo"><span class="logo-name" @click="navigateTo('/')"><img src="/img/Logo/KohiNiLogo.png" alt="KohiNi home" class="logo-img"></span></div>
  
      <!-- Search Bar -->
      <div class="search-bar">
      <input class="input-search" aria-label="Search drinks"
        type="text"
        v-model="searchQuery"
        @input="searchDrinks"
        placeholder="Have a drink in mind?"
      />

      <!-- Search Results Dropdown -->
      <ul v-if="searchQuery" class="search-results">
        <li v-if="searchResults.length" v-for="drink in searchResults" :key="drink.id" @click="goToContent(drink.id)">
          {{ drink.drink_name }}
        </li>
        <li v-else class="no-results">
          No results found.
        </li>
      </ul>
    </div>
    </nav>
</template>
  
  <script>
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../../lib/firebase";

  export default {
    data() {
      return {
        openDropdown: null, // Track which dropdown is open
        searchQuery: "",
        drinks: [],
        searchResults: [],
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
      async fetchDrinks() {
        const drinksCollection = collection(db, "Drinks");
        const drinksSnapshot = await getDocs(drinksCollection);
        this.drinks = drinksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      },
      searchDrinks() {
        const query = this.searchQuery.trim().toLowerCase();
        if (!query) {
          this.searchResults = [];
          return;
        }
        this.searchResults = this.drinks.filter((drink) =>
          (drink.drink_name || "").toLowerCase().includes(query)
        );
      },
      goToContent(drinkId) {
        this.searchQuery = "";
        this.searchResults = [];
        this.$router.push(`/content/${drinkId}`);
      },
    },
    mounted() {
      document.addEventListener("click", this.closeDropdown);
      this.fetchDrinks();
    },
    beforeUnmount() {
      document.removeEventListener("click", this.closeDropdown);
    },
  };
  </script>
  
  <style scoped>
  @import './NavBarBase.css';
  </style>
  