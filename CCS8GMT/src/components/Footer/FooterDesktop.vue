
<template>
        <div class="main-footer-container">
        <!-- Footer -->
        <footer class="footer">
            <!-- Section: Social media -->
            <div class="social-media-section">
                <!-- Left -->
                <div class="social-text">
                    <span>Get connected with us on social networks:</span>
                </div>
                <!-- Left -->

                <!-- Right -->
                <div class="social-icons">
                    <a href="#" class="icon-link" aria-label="Facebook">
                        <span class="fa fa-facebook-f"></span>
                    </a>
                    <a href="#" class="icon-link" aria-label="Twitter">
                        <span class="fa fa-twitter"></span>
                    </a>
                    <a href="#" class="icon-link" aria-label="Instagram">
                        <span class="fa fa-instagram"></span>
                    </a>
                    <a href="#" class="icon-link" aria-label="Discord">
                        <span class="fab fa-discord"></span>
                    </a>
                    <a href="#" class="icon-link" aria-label="GitHub">
                        <span class="fab fa-github"></span>
                    </a>
                </div>
                <!-- Right -->
            </div>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="footer-links">
                <div class="sub-footer-container text-center text-md-start mt-5">
                    <div class="row mt-1">
                        <div class="col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <div class="footer-logo">
                                <router-link to="/"><img src="/img/Logo/favicon-32x32.png" class="footer-image" /></router-link>
                                <h6 class="footer-heading">KohiNi</h6>
                            </div>
                            <p class="footer-description">
                                Discover the art of coffee brewing with KohiNi. Your journey to the perfect cup starts here.
                            </p>
                        </div>

                        <div class="col col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="footer-heading">RECIPES</h6>
                            <p class="recipe-caffein">
                                <router-link to="/CaffeinatedCoffee" class="text-reset">Caffeinated Drinks</router-link>
                            </p>
                            <p class="recipe-non-caffein">
                                <router-link to="/NonCaffeinatedDrinks" class="text-reset">Non-Caffeinated Drinks</router-link>
                            </p>
                        </div>

                        <div class="col col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="footer-heading">USEFUL LINKS</h6>
                            <p class="useful-links">
                                <router-link to="/about" class="text-reset">About Us</router-link>
                            </p>
                            <p class="useful-links">
                                <router-link to="/contact" class="text-reset">Contact Us</router-link>
                            </p>
                            <p class="useful-links">
                                <router-link to="/FAQ" class="text-reset">Frequently Asked Questions</router-link>
                            </p>
                            <p class="useful-links">
                                <router-link to="/Site-Map" class="text-reset">Site-Map</router-link>
                            </p>
                        </div>

                        <div class="col col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="footer-heading">CONTACT</h6>
                            <p class="contact-email"><span class="icon-email"></span> contactus@kohini.com</p>
                            <p class="contact-cellphone"><span class="icon-phone"></span> +01 234 567 88</p>
                            <p class="contact-telephone"><span class="icon-print"></span> +01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="footer-copyright">
                © 2025 Copyright:
                <a class="text-reset fw-bold" href="/">KohiNi</a>
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
  </template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.openDropdown = null; // Close dropdown after navigation
    },
  },
};
</script>


<style scoped>
@import 'Footer.css';
@import 'FooterMobile.css';
</style>