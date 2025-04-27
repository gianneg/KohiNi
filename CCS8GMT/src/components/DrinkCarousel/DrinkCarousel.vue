<template>
  <div class="carousel-container">
    <h2 class="carousel-title"><i>Pick any drink of your choice!</i></h2>
    <div class="carousel-wrapper">
      <button class="carousel-btn left" @click="scroll(-1)">
        &#9664;
      </button>

      <div class="carousel" ref="carousel">
        <a
          v-for="drink in drinks"
          :key="drink.id"
          @click.prevent="goToDrink(drink.id)"
          class="carousel-item"
        >
          <img :src="drink.image_url" alt="Drink" />
        </a>
      </div>

      <button class="carousel-btn right" @click="scroll(1)">
        &#9654;
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      drinks: [],
    };
  },
  methods: {
    async fetchDrinks() {
      try {
        const snapshot = await getDocs(collection(db, "Drinks"));
        this.drinks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    },
    scroll(direction) {
      const carousel = this.$refs.carousel;
      const card = carousel.querySelector(".carousel-item");
      const cardWidth = card ? card.offsetWidth : 150;
      carousel.scrollLeft += direction * cardWidth;
    },
    goToDrink(drinkId) {
      this.$router.push(`/content/${drinkId}`);
    },
  },
  mounted() {
    this.fetchDrinks();
  },
};
</script>

<style scoped>
@import './DrinkCarouselBase.css';
@import './DrinkCarouselLargeMobile.css';
@import './DrinkCarouselSmallMobile.css';
</style>
