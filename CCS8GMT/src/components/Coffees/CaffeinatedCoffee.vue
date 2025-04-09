<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiperInstance;

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
          <h2>CAFFEINATED_BASED</h2>
      </div>
      <div class="video-section">
          This is where the video should be.
      </div>
      <div class="child-container">
          <div class="container swiper">
              <div class="card-wrapper">
                  <ul class="card-list swiper-wrapper">
                      <li class="card-item swiper-slide">
                          <div class="card-link">
                              <h3 class="drink-name">Drink 1</h3>
                              <img src="/img/CaffeinatedCoffee/Vietnamese_Iced_Coffee.jpg" alt="Card Image" class="card-image">
                              <div class="image-holder"></div>
                              <div class="drink-info">
                                  <h2 class="card-title">Vietnamese Iced Coffee</h2>
                                  <hr class="hr-line" />
                                  <button class="card-button">Discover</button>
                              </div>
                          </div>
                      </li>
                      <li class="card-item swiper-slide">
                          <div class="card-link">
                              <h3 class="drink-name">Drink 1</h3>
                              <img src="/img/CaffeinatedCoffee/Spanish-Iced-Latte.jpg" alt="Card Image" class="card-image">
                              <div class="image-holder"></div>
                              <div class="drink-info">
                                  <h2 class="card-title">Spanish Iced Latte</h2>
                                  <hr class="hr-line" />
                                  <button class="card-button">Discover</button>
                              </div>
                          </div>
                      </li>
                      <li class="card-item swiper-slide">
                          <div class="card-link">
                              <h3 class="drink-name">Drink 1</h3>
                              <img src="/img/CaffeinatedCoffee/Iced-Caramel-Macchiato.jpg" alt="Card Image" class="card-image">
                              <div class="image-holder"></div>
                              <div class="drink-info">
                                  <h2 class="card-title">Iced Caramel Macchiato</h2>
                                  <hr class="hr-line" />
                                  <button class="card-button">Discover</button>
                              </div>
                          </div>
                      </li>
                      <li class="card-item swiper-slide">
                          <div class="card-link">
                              <h3 class="drink-name">Drink 1</h3>
                              <img src="/img/CaffeinatedCoffee/Espresso-Coffee.jpg" alt="Card Image" class="card-image">
                              <div class="image-holder"></div>
                              <div class="drink-info">
                                  <h2 class="card-title">Espresso</h2>
                                  <hr class="hr-line" />
                                  <button class="card-button">Discover</button>
                              </div>
                          </div>
                      </li>
                      <li class="card-item swiper-slide">
                          <div class="card-link">
                              <h3 class="drink-name">Drink 1</h3>
                              <img src="/img/CaffeinatedCoffee/Caramel-Frappuccino.jpg" alt="Card Image" class="card-image">
                              <div class="image-holder"></div>
                              <div class="drink-info">
                                  <h2 class="card-title">Caramel Frappuccino</h2>
                                  <hr class="hr-line" />
                                  <button class="card-button">Discover</button>
                              </div>
                          </div>
                      </li>
                      <li class="card-item swiper-slide">
                          <div class="card-link">
                              <h3 class="drink-name">Drink 1</h3>
                              <img src="/img/CaffeinatedCoffee/Mocha-Latte.jpg" alt="Card Image" class="card-image">
                              <div class="image-holder"></div>
                              <div class="drink-info">
                                  <h2 class="card-title">Mocha Latte</h2>
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