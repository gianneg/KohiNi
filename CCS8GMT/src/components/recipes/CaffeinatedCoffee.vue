<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const router = useRouter();

let swiperInstance = null;

//Caffeine Drinks Data
const caffeineDrinks = ref([]);

const fetchCaffeinatedDrinks = async () => {
  try {
    const drinksRef = collection(db, "Drinks");
    const q = query(drinksRef, where("type", "==", "caffeinated"));
    const querySnapshot = await getDocs(q);

    caffeineDrinks.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().drink_name,
      drink_tag: doc.data().tags,
      drink_main_tag: doc.data().main_tag,
      image: doc.data().image_url,
    }));
  } catch (error) {
    console.error("Error fetching caffeinated drinks:", error);
  }
};

onMounted(async () => {
  await fetchCaffeinatedDrinks();

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
          <h2>CAFFEINATED DRINKS</h2>
          <p class="caffeine-tagline">“Brew it your way — Explore delicious coffee recipes from around the world.”</p>
      </div>
      <div class="video-section">
          <img src="/videos/NonCoffee.mp4" alt="Banner" class="banner-image"/>
      </div>
      <div class="child-container">
        <div class="coffee-container swiper">
            <div class="card-wrapper">
            <ul class="card-list swiper-wrapper">
                <li
                v-for="drink in caffeineDrinks"
                :key="drink.id"
                class="card-item swiper-slide"
                >
                <div class="card-link" @click="$router.push(`/content/${drink.id}`)">
                    <h3 class="drink-name">{{ drink.drink_main_tag }}</h3>
                    <img :src="drink.image" alt="Card Image" class="card-image" />
                    <div class="image-holder"></div>
                    <div class="drink-info">
                    <h2 class="card-title">{{ drink.title }}</h2>
                    <hr class="hr-line" />
                    <div class="drink-tags">
                      <ul class="tags-list">
                        <li 
                          v-for="(tag, index) in drink.drink_tag" 
                          :key="index"
                          :class="tag === 'Caramel' ? 'caramel-tag' : tag === 'Discover' ? 'discover-tag' : tag === 'Mocha' ? 'mocha-tag' : tag === 'Trending' ? 'trending-tag' : tag === 'Dairy' ? 'dairy-tag' : tags"
                        >
                          {{ tag }}
                        </li>
                      </ul>
                    </div>
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


.banner-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}
.video-section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
</style>