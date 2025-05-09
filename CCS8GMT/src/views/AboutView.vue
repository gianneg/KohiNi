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
        <!-- <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.image" alt="Team Member" class="team-member-image" />
          <h4 class="team-member-name">{{ member.name }}</h4>
          <p class="team-member-role">{{ member.role }}</p>
        </div> -->
        <div class="team-member box-1">
          <img src="/img/Members/CCS8_Tapic.jpg" alt="Team Member" class="team-member-image-1" />
          <div class="team-member-description-1">
            <h4 class="team-member-name-1">Alcris Tapic</h4>
            <p class="team-member-role-1">Developer/Designer</p>
          </div>
        </div>
        <div class="team-member box-2">
          <div class="team-member-description-2">
            <h4 class="team-member-name-2">Gianne Gaudan</h4>
            <p class="team-member-role-2">Developer/Designer</p>
          </div>
          <img src="/img/Members/CCS8_Gianne.jpg" alt="Team Member" class="team-member-image-2" />
        </div>
        <div class="team-member box-3">
          <img src="/img/Members/CCS8_John.jpg" alt="Team Member" class="team-member-image-3" />
          <div class="team-member-description-3">
            <h4 class="team-member-name-3">John Magbanua</h4>
            <p class="team-member-role-3">Developer/Designer</p>
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
