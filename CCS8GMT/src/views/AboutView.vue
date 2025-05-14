<template>
  <div class="about-us-container">
    <h2 class="about-us-header">About Us</h2>
    <div class="description-container">
      <p class="about-us-description">
      Welcome to our website! We are dedicated to providing the best services to our customers.
      </p>
      <p class="about-us-description">
        Our team is passionate about innovation and excellence in everything we do.
      </p>
      <p class="about-us-description">
        Feel free to explore and learn more about us!
      </p>
    </div>

    <div class="team-section">
      <h3 class="team-header">Meet Our Team</h3>
      <div class="team-member-container">
        <div class="team-member box-1">
          <img src="/img/Members/CCS8_Tapic.jpg" alt="Alcris Tapic" class="team-member-image-1" />
          <div class="team-member-description-1">
            <h4 class="team-member-name-1">Alcris Tapic</h4>
            <p class="team-member-role-1">Developer/Designer</p>
            <p class="team-member-details-1">
              Alcris Tapic is a 3rd Year Bachelor of Science in Information Technology Student at Silliman University. 
              He specializes in back-end programming. He is also a member of !compiler, a student group that focuses on
              programming and technology. Alcris is passionate about coding and enjoys programming.
            </p>
            <div class="about-social-icons">
                <a href="#" class="facebook-icon" aria-label="Facebook">
                    <span class="facebook-icon"></span>
                </a>
                <a href="#" class="twitter-icon" aria-label="Twitter">
                    <span class=""></span> 
                </a>
                <a href="#" class="instagram-icon" aria-label="Instagram">
                    <span class=""></span>
                </a>
                <a href="#" class="discord-icon" aria-label="Discord">
                    <span class=""></span>
                </a>
                <a href="#" class="github-icon" aria-label="GitHub">
                    <span class=""></span>
                </a>
            </div>
          </div>
        </div>
        <div class="team-member box-2">
          <div class="team-member-description-2">
            <h4 class="team-member-name-2">Gianne Gaudan</h4>
            <p class="team-member-role-2">Developer/Designer</p>
            <p class="team-member-details-2">
              Gianne Guenter S. Gaudan is a 3rd Year Bachelor of 
              Science in Information Technology Student at Silliman University. 
              He specializes in both front-end and back-end programming. Apart from programming, 
              Gianne enjoys a good smoothie or lemonade to complete his day. 
            </p>
            <div class="about-social-icons-2">
              <a href="#" class="facebook-icon" aria-label="Facebook">
                  <span class="facebook-icon"></span>
              </a>
              <a href="#" class="twitter-icon" aria-label="Twitter">
                  <span class=""></span> 
              </a>
              <a href="#" class="instagram-icon" aria-label="Instagram">
                  <span class=""></span>
              </a>
              <a href="#" class="discord-icon" aria-label="Discord">
                  <span class=""></span>
              </a>
              <a href="#" class="github-icon" aria-label="GitHub">
                  <span class=""></span>
              </a>
            </div>
          </div>
          <img src="/img/Members/CCS8_Gianne.jpg" alt="Gianne Gaudan" class="team-member-image-2" />
        </div>
        <div class="team-member box-3">
          <img src="/img/Members/CCS8_John.jpg" alt="John Magbanua" class="team-member-image-3" />
          <div class="team-member-description-3">
            <h4 class="team-member-name-3">John Magbanua</h4>
            <p class="team-member-role-3">Developer/Designer</p>
            <p class="team-member-details-3">
              John Magbanua is a 3rd Year Bachelor of Science in Information Technology Student at Silliman University. 
              He specializes in back-end programming. He is also a member of !compiler, a student group that focuses on 
              programming and technology. John enjoys playing games and watching movies.
            </p>
            <div class="about-social-icons">
                <a href="#" class="facebook-icon" aria-label="Facebook">
                    <span class="facebook-icon"></span>
                </a>
                <a href="#" class="twitter-icon" aria-label="Twitter">
                    <span class=""></span> 
                </a>
                <a href="#" class="instagram-icon" aria-label="Instagram">
                    <span class=""></span>
                </a>
                <a href="#" class="discord-icon" aria-label="Discord">
                    <span class=""></span>
                </a>
                <a href="#" class="github-icon" aria-label="GitHub">
                    <span class=""></span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return { 
      teamMembers: [
        { id: 1, name: 'Gianne G. Gaudan', role: 'Developer/Designer', image: '/img/Members/CCS8_Gianne.jpg' },
        { id: 2, name: 'John Magbanua', role: 'Developer/Designer', image: '/img/Members/CCS8_John.jpg' },
        { id: 3, name: 'Alcris Tapic', role: 'Developer/Designer', image: '/img/Members/CCS8_Tapic.jpg' }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const teamMembers = document.querySelectorAll('.team-member');
      const teamMemberImages = document.querySelectorAll('.team-member-image-1, .team-member-image-2, .team-member-image-3');
      const triggerPoint = window.innerHeight * 0.8;

      teamMembers.forEach(member => {
        const memberTop = member.getBoundingClientRect().top;
        if (memberTop < triggerPoint) {
          member.classList.add('visible');
        } else {
          member.classList.remove('visible');
        }
      });

      teamMemberImages.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        if (imageTop < triggerPoint) {
          image.classList.add('scrolled');
        } else {
          image.classList.remove('scrolled');
        }
      });
    }
  }
};
</script>

<style scoped>
.team-member {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.team-member.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<style scoped>
@import '../assets/AboutUs.css';
@import '../assets/AboutUsMobile.css';
</style>
