<template>
  <div class="about-us-container">
    <section class="about-hero">
      <p class="eyebrow">Our story</p>
      <h2 class="about-us-header">About <em>Us</em></h2>
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
    </section>

    <section class="team-section">
      <h3 class="team-header">Meet Our Team</h3>
      <div class="team-member-container">
        <article
          class="team-member"
          v-for="(member, index) in teamMembers"
          :key="member.name"
          v-reveal="index * 120"
        >
          <div class="team-photo">
            <img :src="member.image" :alt="member.name" loading="lazy" />
          </div>
          <div class="team-member-description">
            <span class="team-member-role">{{ member.role }}</span>
            <h4 class="team-member-name">{{ member.name }}</h4>
            <p class="team-member-details">{{ member.bio }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: 'Alcris Tapic',
          role: 'Developer/Designer',
          image: '/img/Members/CCS8_Tapic.jpg',
          bio: 'Alcris Tapic is a 3rd Year Bachelor of Science in Information Technology Student at Silliman University. He specializes in back-end programming. He is also a member of !compiler, a student group that focuses on programming and technology. Alcris is passionate about coding and enjoys programming.'
        },
        {
          name: 'Gianne Gaudan',
          role: 'Developer/Designer',
          image: '/img/Members/CCS8_Gianne.jpg',
          bio: 'Gianne Guenter S. Gaudan is a 3rd Year Bachelor of Science in Information Technology Student at Silliman University. He specializes in both front-end and back-end programming. Apart from programming, Gianne enjoys a good smoothie or lemonade to complete his day.'
        },
        {
          name: 'John Magbanua',
          role: 'Developer/Designer',
          image: '/img/Members/CCS8_John.jpg',
          bio: 'John Magbanua is a 3rd Year Bachelor of Science in Information Technology Student at Silliman University. He specializes in back-end programming. He is also a member of !compiler, a student group that focuses on programming and technology. John enjoys playing games and watching movies.'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import '../assets/AboutUs.css';
</style>
