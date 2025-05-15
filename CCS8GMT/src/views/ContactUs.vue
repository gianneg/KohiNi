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
                <span v-if="errors.firstName" class="error">{{ errors.firstName }}</span>
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" v-model="form.lastName" />
                <span v-if="errors.lastName" class="error">{{ errors.lastName }}</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="form.email" />
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="text" v-model="form.phone" />
                <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
              </div>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="Write your message.."></textarea>
            <span v-if="errors.message" class="error">{{ errors.message }}</span>
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
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.firstName) this.errors.firstName = 'First name is required.';
      if (!this.form.lastName) this.errors.lastName = 'Last name is required.';
      if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = 'Email is invalid.';
      }
      if (!this.form.phone) this.errors.phone = 'Phone number is required.';
      if (!this.form.message) this.errors.message = 'Message is required.';

      return Object.keys(this.errors).length === 0;
    },

    submitForm() {
      if (this.validateForm()) {
        alert('Message sent!');
        this..form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        };

       this.errors = {};
      }
    },
  },
};
</script>
  
  <style scoped>
 @import '../assets/ContactUs.css';
 @import '../assets/ContactUsMobile.css';

      .error {
  color: red;
  font-size: 0.9em;
  margin-top: 4px;
  display: block;
  font-family: 'Poppins';
}

  </style>
  
