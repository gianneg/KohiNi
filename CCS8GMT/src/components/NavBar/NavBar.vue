<template>
  <div class="nav-shell" :class="{ scrolled }">
    <NavBarDesktop v-if="!isMobile" />
    <NavBarMobile v-else />
    <div class="nav-progress" aria-hidden="true"></div>
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
      isMobile: window.innerWidth <= 900,
      scrolled: false,
    };
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 900;
    },
    handleScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll", progress.toFixed(4));
      this.scrolled = window.scrollY > 12;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.nav-shell {
  position: relative;
  background: rgba(236, 224, 209, 0.82);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-bottom: 1px solid rgba(73, 35, 16, 0.08);
  transition: box-shadow 0.4s ease, background 0.4s ease;
}

.nav-shell.scrolled {
  background: rgba(236, 224, 209, 0.94);
  box-shadow: 0 10px 30px -18px rgba(73, 35, 16, 0.55);
}

/* the bar fills up like a cup as you scroll */
.nav-progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--caramel), var(--roast));
  transform-origin: left;
  transform: scaleX(var(--scroll));
}
</style>
