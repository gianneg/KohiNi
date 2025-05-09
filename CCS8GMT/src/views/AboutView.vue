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
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.image" alt="Team Member" class="team-member-image" />
          <h4 class="team-member-name">{{ member.name }}</h4>
          <p class="team-member-role">{{ member.role }}</p>
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
  }
};
</script>

<style scoped>
@import '../assets/AboutUs.css';
@import '../assets/AboutUsMobile.css';
</style>
