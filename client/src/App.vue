<template>
  <div>
    <div class="theme-layout" id="scrollup">
      <Header />
      <router-view/>
      <Footer />
    </div>
    <LoginPopup />
    <SignupPopup />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header/Header.vue';
import LoginPopup from './components/LoginPopup.vue';
import SignupPopup from './components/SignupPopup.vue';

export default {
  name: 'app',
  components: {
    Footer, Header, LoginPopup, SignupPopup,
  },
};
</script>
