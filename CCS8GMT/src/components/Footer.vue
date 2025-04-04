<script>
import { MDBFooter, MDBIcon, MDBRow, MDBCol, MDBContainer } from "mdb-vue-ui-kit";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default {
    components: {
      MDBFooter,
      MDBIcon,
      MDBRow,
      MDBCol,
      MDBContainer
    }
}
</script>

<template>
    <div class="main-footer-container">
        <!-- Footer -->
        <MDBFooter :text="['center', 'lg-start', 'muted']">
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
                    <MDBIcon class="link-secondary" icon="fab fa-facebook-f"></MDBIcon>
                </a>
                <a href="" class="icon-link">
                    <MDBIcon class="link-secondary" iconStyle="fab" icon="twitter"></MDBIcon>
                </a>
                <a href="" class="icon-link">
                    <MDBIcon class="link-secondary" iconStyle="fab" icon="google"></MDBIcon>
                </a>
                <a href="" class="icon-link">
                    <MDBIcon class="link-secondary" iconStyle="fab" icon="instagram"></MDBIcon>
                </a>
                <a href="" class="icon-link">
                    <MDBIcon class="link-secondary" iconStyle="fab" icon="linkedin"></MDBIcon>
                </a>
                <a href="" class="icon-link">
                    <MDBIcon class="link-secondary" iconStyle="fab" icon="github"></MDBIcon>
                </a>
            </div>
            <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="footer-links">
            <MDBContainer class="text-center text-md-start mt-5">
                <MDBRow class="mt-1">
                    <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
                        <h6 class="footer-heading">
                        <i class="fas fa-gem me-3 link-secondary"></i>Company name
                        </h6>
                        <p class="footer-description">
                        Here you can use rows and columns to organize your footer content.
                        </p>
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
                        <h6 class="footer-heading">Products</h6>
                        <p><a href="#!" class="text-reset">Angular</a></p>
                        <p><a href="#!" class="text-reset">React</a></p>
                        <p><a href="#!" class="text-reset">Vue</a></p>
                        <p><a href="#!" class="text-reset">Laravel</a></p>
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
                        <h6 class="footer-heading">Useful links</h6>
                        <p><a href="#!" class="text-reset">Pricing</a></p>
                        <p><a href="#!" class="text-reset">Settings</a></p>
                        <p><a href="#!" class="text-reset">Orders</a></p>
                        <p><a href="#!" class="text-reset">Help</a></p>
                    </MDBCol>

                    <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
                        <h6 class="footer-heading">Contact</h6>
                        <p><i class="fas fa-home me-3 link-secondary"></i> New York, NY 10012, US</p>
                        <p><i class="fas fa-envelope me-3 link-secondary"></i> info@example.com</p>
                        <p><MDBIcon icon="phone" class="me-3 link-secondary" /> +01 234 567 88</p>
                        <p><MDBIcon icon="print" class="me-3 link-secondary" /> +01 234 567 89</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="footer-copyright">
                © 2025 Copyright:
                <a class="text-reset fw-bold" href="#">WEBNAME</a>
            </div>
            <!-- Copyright -->
        </MDBFooter>
        <!-- Footer -->
    </div>
</template>

<style scoped>

* {
    color: white !important;
}

.bg-light {
    background-color: rgba(99, 72, 50)!important;
}

.social-media-section {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ccc;
}

.social-text {
  margin-left: 8% !important;
  display: none;
}

@media (min-width: 992px) {
  .social-text {
    display: block;
  }
}

.social-icons {
  display: flex;
  gap: 16px;
  margin-right: 13% !important;
}

.icon-link {
  color: inherit;
  text-decoration: none;
  margin-right: 16px;
}

.footer-links {
  margin-top: 32px;
  text-align: center;
}

.footer-heading {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 16px;
}

.footer-description {
  color: #666;
}

.footer-copyright {
  text-align: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>