<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const router = useRouter();

let swiperInstance = null;

const nonCaffeineDrinks = ref([]);

const fetchNonCaffeinatedDrinks = async () => {
  try {
    const drinksRef = collection(db, "Drinks");
    const q = query(drinksRef, where("type", "==", "non-caffeinated"));
    const querySnapshot = await getDocs(q);

    nonCaffeineDrinks.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().drink_name,
      drink_tag: doc.data().tags,
      image: doc.data().image_url,
    }));
  } catch (error) {
    console.error("Error fetching non-caffeinated drinks:", error);
  }
};

onMounted(async () => {
  await fetchNonCaffeinatedDrinks();

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
      0: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
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
        “Sip the calm — Discover rich, flavorful non-caffeinated drink alternatives.”
      </p>
    </div>
    <div class="video-section">
      This is where the video should be.
    </div>
    <div class="child-container">
      <div class="coffee-container swiper">
        <div class="card-wrapper">
          <ul class="card-list swiper-wrapper">
            <li
              v-for="drink in nonCaffeineDrinks"
              :key="drink.id"
              class="card-item swiper-slide"
            >
              <div class="card-link">
                <h3 class="drink-name">{{ drink.drink_tag }}</h3>
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
@import './CoffeeCarouselMobile.css';
</style>
