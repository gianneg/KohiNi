<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiperInstance;

// Non-Caffein Drinks Data
const nonCaffeinDrinks = ref([
  {
    id: 1,
    title: "Caramel Hot Chocolate",
    image: "/img/NonCaffeinatedCoffee/Caramel-Hot-Chocolate.jpg",
  },
  {
    id: 2,
    title: "Cinnamon Tea Latte",
    image: "/img/NonCaffeinatedCoffee/Cinnamon-Tea-Latte.jpg",
  },
  {
    id: 3,
    title: "Golden Latte",
    image: "/img/NonCaffeinatedCoffee/Golden-Latte.jpg",
  },
  {
    id: 4,
    title: "Slow Caramel Apple Cider",
    image: "/img/NonCaffeinatedCoffee/Slow-Caramel-Apple-Cider.jpg",
  },
  {
    id: 5,
    title: "Strawberry-Lemonade",
    image: "/img/NonCaffeinatedCoffee/Strawberry-Lemonade.jpg",
  },
  {
    id: 6,
    title: "Strawberry Banana Smoothie",
    image: "/img/NonCaffeinatedCoffee/Strawberry-Banana-Smoothie.jpg",
  }
]);

onMounted(() => {
  swiperInstance = new Swiper('.card-wrapper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy();
  }
});
</script>

<template>
  <div class="parent-container">
    <div class="title-section">
      <h2>NON-CAFFEINATED DRINKS</h2>
      <p class="non-caffeine-tagline">
        “Sip the calm — Discover rich, flavorful non-caffeinated coffee alternatives.”
      </p>
    </div>
    <div class="video-section">
      This is where the video should be.
    </div>
    <div class="child-container">
      <div class="container swiper">
        <div class="card-wrapper">
          <ul class="card-list swiper-wrapper">
            <li
              v-for="drink in nonCaffeinDrinks"
              :key="drink.id"
              class="card-item swiper-slide"
            >
              <div class="card-link">
                <h3 class="drink-name">Drink</h3>
                <img :src="drink.image" alt="Card Image" class="card-image" />
                <div class="image-holder"></div>
                <div class="drink-info">
                  <h2 class="card-title">{{ drink.title }}</h2>
                  <hr class="hr-line" />
                  <button class="card-button">Discover</button>
                </div>
              </div>
            </li>
          </ul>

          <div class="swiper-pagination"></div>
          <div class="swiper-slide-button swiper-button-prev"></div>
          <div class="swiper-slide-button swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './CoffeeCarousel.css';
</style>
