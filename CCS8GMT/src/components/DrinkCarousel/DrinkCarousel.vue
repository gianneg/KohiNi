<template>
  <div class="carousel-container">
    <h2 class="carousel-title"><i>Pick any drink of your choice!</i></h2>
    <div class="carousel-wrapper">
      <button
        class="carousel-btn left"
        @mouseenter="startScrolling(-1)"
        @mouseleave="stopScrolling"
      >
        &#9664;
      </button>

      <div class="carousel" ref="carousel">
        <a v-for="drink in drinks" :key="drink.id" :href="drink.link" class="carousel-item">
          <img :src="drink.image" alt="Drink" />
        </a>
      </div>

      <button
        class="carousel-btn right"
        @mouseenter="startScrolling(1)"
        @mouseleave="stopScrolling"
      >
        &#9654;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: [
        { id: 1, route: "/#", image: "https://via.placeholder.com/100" },
        { id: 2, route: "/#", image: "https://via.placeholder.com/100" },
        { id: 3, route: "/#", image: "https://via.placeholder.com/100" },
        { id: 4, route: "/#", image: "https://via.placeholder.com/100" },
        { id: 5, route: "/#", image: "https://via.placeholder.com/100" },
        { id: 6, route: "/#", image: "https://via.placeholder.com/100" },
      ],
      scrollInterval: null,
    };
  },
  methods: {
    startScrolling(direction) {
      this.scrollInterval = setInterval(() => {
        if (this.$refs.carousel) {
          this.$refs.carousel.scrollLeft += direction * 10;
        }
      }, 50);
    },
    stopScrolling() {
      clearInterval(this.scrollInterval);
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
@import './DrinkCarouselBase.css'; /*Desktop*/
@import './DrinkCarouselLargeMobile.css'; /*768px*/
@import './DrinkCarouselSmallMobile.css'; /*480px*/
</style>
