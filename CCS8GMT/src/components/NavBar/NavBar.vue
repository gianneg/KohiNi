<template>
  <div>
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
      isMobile: window.outerWidth <= 768,
    };
  },
  methods: {
    handleResize() {
      if (this.isMobile && (outerWidth <= 768) && (outerWidth > 480)) 
      {
        window.outerWidth <= 768;
      }
      else if (this.isMobile && (outerWidth <= 480)) 
      {
        window.outerWidth <= 480;
      }
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
