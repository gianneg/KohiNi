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
                                <img src="/images/NonCaffeinatedCoffee/Caramel-Hot-Chocolate.jpg" alt="Card Image" class="card-image">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Caramel Hot Chocolate</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <h3 class="drink-name">Drink 1</h3>
                                <img src="/images/NonCaffeinatedCoffee/Cinnamon-Tea-Latte.jpg" alt="Card Image" class="card-image">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Cinnamon Tea Latte</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <h3 class="drink-name">Drink 1</h3>
                                <img src="/images/NonCaffeinatedCoffee/Golden-Latte.jpg" alt="Card Image" class="card-image">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Golden Latte</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <h3 class="drink-name">Drink 1</h3>
                                <img src="/images/NonCaffeinatedCoffee/Slow-Caramel-Apple-Cider.jpg" alt="Card Image" class="card-image">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Slow Caramel Apple Cider</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <h3 class="drink-name">Drink 1</h3>
                                <img src="/images/NonCaffeinatedCoffee/Strawberry-Lemonade.jpg" alt="Card Image" class="card-image">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Strawberry-Lemonade</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <h3 class="drink-name">Drink 1</h3>
                                <img src="/images/NonCaffeinatedCoffee/Strawberry-Banana-Smoothie.jpg" alt="Card Image" class="card-image">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Strawberry Banana Smoothie</h2>
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
  
  * {
    font-family: "Poppins", sans-serif;
  }
  
  .video-section {
    min-height: 30vh;
  }
  
  .title-section h2{
    color:rgb(73, 35, 16);
    margin-left: 250px;
  }
  
  .child-container{
    background-color: #ECE0D1;
    height: 550px;
  }
  
  .swiper {
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding-top: 50px;
  }
  
  .container .card-wrapper {
    max-width: 1100px;
    margin: 0 60px 35px;
    overflow: hidden;
  }
  
  .card-list{
    margin: 0%;
    padding: 0%;
  }
  
  .card-list .card-item {
    list-style: none;
    height: auto;
    padding: 0%;
  }
  
  .card-list .card-item .card-link {
    user-select: none;
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 12px;
    text-decoration: none;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .card-list .card-item .card-link:active {
    cursor: grabbing;
  }
  
  .card-list .card-item .card-link:hover {
    /* border-color: #5372F0; */
    border-color: none;
  }
  
  .card-list .card-link .card-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .drink-name {
    position: absolute;
    top: 25px;
    left: 43.5%;
    z-index: 20;
    /* margin-bottom: 0px; */
    margin: -5px;
  
    background: #DCA56D;
  }
  
  .card-list .card-link .card-image {
    width: 150px;
    height: 180px;
    background: #eee;
    position: absolute;
    top: 17%;
    left: 50%;
    transform: translateX(-50%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
  
  .image-holder {
    height: 160px;
    width: 100%;
    background: #3F1A12;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    border: 2px solid #DCA56D;
    margin-top: 40%;
    margin-bottom: 0%;
  }
  
  .drink-info {
    position: relative;
    height: 150px;
    width: 100%;
    top: -25px;
    background: #fff;
    border: 2px solid #DCA56D;
  }
  
  
  .card-list .card-link .card-title {
    padding-top: 25px;
    margin-left: 25px;
    font-size: 1.30rem;
    color: #000;
    font-weight: 600;
  }
  
  .drink-info hr {
    width: 260px;
    border: 1px solid #3F1A12;
  }
  
  .card-list .card-link .card-button{
    color: #3F1A12;
    padding: 6px 10px;
    margin-top: 10px;
    margin-left: 25px;
    margin-bottom: 15px;
    border-radius: 50px 50px;
    font-size: 12px;
    background: none;
    cursor: pointer;
    border: 2px solid #3F1A12;
    transition: 0.4s ease;
  }
  
  .card-list .card-link:hover .card-button{
    color:#fff;
    background: #3F1A12;
  }
  
  .card-list .card-link:hover .drink-info{
    background: #DCA56D;
  }
  
  
  .card-list .card-link:hover {
    transform: scale(1.1);
  }
  
  ::v-deep(.swiper-pagination-bullet) {
    width: 13px !important;
    height: 13px !important;
    background: #3F1A12 !important;
  }
  
  ::v-deep(.swiper-pagination-bullet-active) {
    width: 16px !important;
    height: 16px !important;
    background: #3F1A12 !important;
  }
  
  .card-wrapper .swiper-slide-button {
    margin-top: -35px;
  }
  
  .swiper-button-next,
  .swiper-button-prev{
    color: #3F1A12;
  }
  
  @media screen and (max-width: 768px) {
    .card-wrapper {
        margin: 0 10px 25px;
    }
  
    .card-wrapper .swiper-slide-button {
        display: none;
    }
  }
  </style>