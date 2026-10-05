  <template>
    <nav class="navbar" aria-label="Main">
      <div class="mobile-left">
        <button
          class="hamburger"
          :class="{ active: isMenuOpen }"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span></span><span></span><span></span>
        </button>
        <img src="/img/Logo/KohiNiLogo.png" alt="KohiNi Logo" class="logo-img" @click="navigateTo('/')" />
      </div>

      <!-- Teleported so the blurred nav bar doesn't trap the fixed drawer -->
      <Teleport to="body">
        <!-- Overlay to close menu when clicking outside -->
        <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ open: isMenuOpen }">
          <div class="drawer-head">
            <span class="drawer-brand">KohiNi</span>
            <button class="close-btn" aria-label="Close menu" @click="toggleMenu">&#10005;</button>
          </div>

          <div class="nav-links">
            <span v-for="(link, i) in links" :key="link.route" :style="{ '--i': i }" @click="navigateTo(link.route)">
              {{ link.label }}
            </span>
          </div>

          <p class="drawer-cup">Brew it your way &#9749;</p>
        </div>
      </Teleport>
    </nav>
  </template>


  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        links: [
          { label: "Home", route: "/" },
          { label: "About Us", route: "/about" },
          { label: "Contact Us", route: "/contact" },
          { label: "Frequently Asked Questions", route: "/faq" },
          { label: "Caffeine Recipes", route: "/CaffeinatedCoffee" },
          { label: "Non-Caffeine Recipes", route: "/NonCaffeinatedDrinks" },
        ],
      };
    },
    watch: {
      isMenuOpen(open) {
        document.body.style.overflow = open ? "hidden" : "";
      },
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      navigateTo(route) {
        this.$router.push(route);
        this.isMenuOpen = false;
      },
    },
    beforeUnmount() {
      document.body.style.overflow = "";
    },
  };
  </script>

  <style scoped>
  @import "./NavBarMobile.css";
  </style>
