<template>
  <div class="carousel-container">
    <h2 class="carousel-title">Pick any drink of <em>your</em> choice</h2>
    <div class="carousel-wrapper">
      <button class="carousel-btn left" aria-label="Previous drinks" @click="scroll(-1)">
        &#8592;
      </button>

      <div class="carousel" ref="carousel">
        <a
          v-for="drink in drinks"
          :key="drink.id"
          @click.prevent="goToDrink(drink.id)"
          class="carousel-item"
        >
          <img :src="drink.image_url" :alt="drink.drink_name || 'Drink Image'" loading="lazy" />
        </a>
      </div>

      <button class="carousel-btn right" aria-label="Next drinks" @click="scroll(1)">
        &#8594;
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
      carousel.scrollBy({ left: direction * cardWidth * 2, behavior: "smooth" });
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
</style>
