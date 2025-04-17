<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiperInstance;

//Caffein Drinks Data
const caffeinDrinks = ref([
    {
        id: 1,   
        title: "Vietnamese Iced Coffee",
        image:"/img/CaffeinatedCoffee/Vietnamese_Iced_Coffee.jpg",
    },
    {
        id: 2,   
        title: "Spanish Iced Latte",
        image:"/img/CaffeinatedCoffee/Spanish-Iced-Latte.jpg",
    },
    {
        id: 3,   
        title: "Ice Caramel Macchiato",
        image:"/img/CaffeinatedCoffee/Ice-Caramel-Macchiato.jpg",
    },
    {
        id: 4,   
        title: "Espresso",
        image:"/img/CaffeinatedCoffee/Espresso-Coffee.jpg",
    },
    {
        id: 5,   
        title: "Caramel Frappuccino",
        image:"/img/CaffeinatedCoffee/Caramel-Frappuccino.jpg",
    },
    {
        id: 6,   
        title: "Mocha Latte",
        image:"/img/CaffeinatedCoffee/Mocha-Latte.jpg",
    },
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
          <h2>CAFFEINATED DRINKS</h2>
          <p class="caffeine-tagline">“Brew it your way — Explore delicious coffee recipes from around the world.”</p>
      </div>
      <div class="video-section">
          This is where the video should be.
      </div>
      <div class="child-container">
        <div class="container swiper">
            <div class="card-wrapper">
            <ul class="card-list swiper-wrapper">
                <li
                v-for="drink in caffeinDrinks"
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