<template>
    <div class="contact-container">
      <div class="contact-header">
        <h2>Get In Touch</h2>
        <p>Don't be shy. Give us a call or message us.</p>
      </div>
  
      <div class="contact-content">
        <div class="contact-form">
          <h3>Send A Message</h3>
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" v-model="form.firstName" />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" v-model="form.lastName" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="form.email" />
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="text" v-model="form.phone" />
              </div>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="Write your message.."></textarea>
            </div>
            <button type="submit" class="send-button">Send Message</button>
          </form>
        </div>
  
        <div class="contact-info">
          <h3>Contact Information</h3>
          <div class="info-item">
            <span class="icon phone-icon"></span>
            <span>+01 234 567 89</span>
          </div>
          <div class="info-item">
            <span class="icon email-icon"></span>
            <span>contactus@kohini.com</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        alert('Message sent!');
        // Here you could also send form data to an API
      },
    },
  };
  </script>
  
  <style scoped>
 @import '../assets/ContactUs.css';
 @import '../assets/ContactUsMobile.css';
  </style>
  
