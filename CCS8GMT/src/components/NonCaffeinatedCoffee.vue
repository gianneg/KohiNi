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
                                <div class="drink-name">
                                    <h3>Drink 1</h3>
                                </div>
                                <img src="/images/cutecat.jpg" alt="Card Image" class="card-image1">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Cocoa Caramel</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <div class="drink-name">
                                    <h3>Drink 1</h3>
                                </div>
                                <img src="/images/cutecat.jpg" alt="Card Image" class="card-image1">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Cocoa Caramel</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <div class="drink-name">
                                    <h3>Drink 1</h3>
                                </div>
                                <img src="/images/cutecat.jpg" alt="Card Image" class="card-image1">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Cocoa Caramel</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                        <li class="card-item swiper-slide">
                            <div class="card-link">
                                <div class="drink-name">
                                    <h3>Drink 1</h3>
                                </div>
                                <img src="/images/cutecat.jpg" alt="Card Image" class="card-image1">
                                <div class="image-holder"></div>
                                <div class="drink-info">
                                    <h2 class="card-title">Cocoa Caramel</h2>
                                    <hr class="hr-line" />
                                    <button class="card-button">Discover</button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="swiper-pagination-bullet swiper-pagination"></div>
                    <div class="swiper-slide-button swiper-button-prev"></div>
                    <div class="swiper-slide-button swiper-button-next"></div>
                </div>
            </div>
        </div>
        <div class="footer" style="color: black; text-align: center;">
            <h1>FOOTER</h1>
        </div>
    </div>
</template>

<script>
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 10,

    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
    }
  });
});
</script>

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
    height: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}

.swiper {
  width: 100%;
  max-width: 1200px;
  height: auto;
}


.container .card-wrapper {
    max-width: 1100px;
    margin: 0 60px 35px;
    overflow: hidden;
}

.card-list .card-item {
    list-style: none;
}

.card-list .card-item .card-link {
    user-select: none;
    display: block;
    /* background: #fff; */
    padding: 18px;
    border-radius: 12px;
    text-decoration: none;
    border: 2px solid transparent;
    /* box-shadow: 0 10px rgb(0,0,0,0.05 ); */
    transition: all 0.3s ease;
    position: relative;
    height: 100%;
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
    top: 15px;
    left: 40%;
    z-index: 20;
    margin-bottom: 50px;
}

.card-list .card-link .card-image1 {
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
    margin-top: 40%;
    margin-bottom: 0%;
}

.drink-info {
    position: relative;
    height: 100%;
    top: -25px;
    background: #fff;
}


.card-list .card-link .card-title {
    padding-top: 25px;
    margin-left: 15px;
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
    margin-left: 15px;
    border-radius: 50px 50px;
    font-size: 12px;
    background: none;
    cursor: pointer;
    border: 2px solid #3F1A12;
    transition: 0.4s ease;
    margin-bottom: 15px;
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

.card-wrapper .swiper-pagination-bullet {
    height: 15px;
    width: 20px;
    opacity: 0.5;
    background: #ECE0D1; 
    color: #3F1A12;
}

.card-wrapper .swiper-pagination-bullet:active {
    opacity: 1;
}

.card-wrapper .swiper-slide-button {
    margin-top: -35px;
}

.swiper-button-next,
.swiper-button-prev,
.swiper-pagination {
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