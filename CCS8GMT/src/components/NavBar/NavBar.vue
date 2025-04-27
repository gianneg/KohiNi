<template>
  <div class="container">
    <NavBarDesktop v-if="!isMobile" />
    <NavBarMobile v-else />
  </div>
</template>

<script>
import NavBarDesktop from "./NavBarDesktop.vue";
import NavBarMobile from "./NavBarMobile.vue";

export default {
  components: {
    NavBarDesktop,
    NavBarMobile,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768,
    };
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.container {
  max-width: 1280px;
  width: 1280px;
}
</style>