
<template>
        <div class="main-footer-container">
        <!-- Footer -->
        <footer class="footer">
            <!-- Section: Social media -->
            <section class="social-media-section">
                <!-- Left -->
                <div class="social-text">
                    <span>Get connected with us on social networks:</span>
                </div>
                <!-- Left -->

                <!-- Right -->
                <div class="social-icons">
                    <a href="" class="icon-link">
                        <span class="fa fa-facebook-f"></span>
                    </a>
                    <a href="" class="icon-link">
                        <span class="fa fa-twitter"></span>
                    </a>
                    <a href="" class="icon-link">
                        <span class="fa fa-google"></span>
                    </a>
                    <a href="" class="icon-link">
                        <span class="fa fa-instagram"></span>
                    </a>
                    <a href="" class="icon-link">
                        <span class="fa fa-linkedin"></span>
                    </a>
                    <a href="" class="icon-link">
                        <span class="fa fa-github"></span>
                    </a>
                </div>
                <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="footer-links">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-1">
                        <div class="col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="footer-heading">
                                <a href="/"><img src="/img/Logo/favicon-32x32.png"></a>COMPANY NAME
                            </h6>
                            <p class="footer-description">
                                Here you can use rows and columns to organize your footer content.
                            </p>
                        </div>

                        <div class="col col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="footer-heading">RECIPES</h6>
                            <p class="recipe-caffein"><a href="/CaffeinatedCoffee" class="text-reset">Caffeinated Coffee</a></p>
                            <p class="recipe-non-caffein"><a href="/NonCaffeinatedCoffee" class="text-reset">Non-Caffeinated Coffee</a></p>
                        </div>

                        <div class="col col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="footer-heading">USEFUL LINKS</h6>
                            <p><a href="#!" class="text-reset">Pricing</a></p>
                            <p><a href="#!" class="text-reset">Settings</a></p>
                            <p><a href="#!" class="text-reset">Orders</a></p>
                            <p><a href="#!" class="text-reset">Help</a></p>
                        </div>

                        <div class="col col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="footer-heading">CONTACT</h6>
                            <p class="contact-email"><span class="icon-email"></span> info@example.com</p>
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
</style>