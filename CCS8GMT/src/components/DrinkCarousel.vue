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
@import url('https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300');

.carousel-container {
  background-color: #C1A088;
  padding-top: 1px;
  padding-bottom: 20px;
  text-align: center;
}

.carousel-title {
  font-size: 48px;
  color: white;
  font-family: Platypi;
  font-weight: 300;
  margin-bottom: 15px;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF8F0;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 700px;
  margin: auto;
}

.carousel {
  display: flex;
  gap: 15px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 80%;
  padding: 10px 0;
  white-space: nowrap;
}

.carousel-item {
  flex: 0 0 auto;
  width: 100px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  background-color: white;
  text-decoration: none;
}

.carousel-item img {
  width: 100%;
  height: auto;
}

.carousel-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #5d3a2b;
  padding: 10px;
}

.carousel-btn:hover {
  color: black;
}
</style>
