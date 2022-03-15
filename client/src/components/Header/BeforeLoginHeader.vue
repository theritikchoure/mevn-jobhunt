<template>
  <header class="stick-top forsticky">
    <div class="menu-sec">
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">
            <a href="#" title="">
              <img class="hidesticky" src="images/resource/logo.png" alt="" />
              <img class="showsticky" src="images/resource/logo10.png" alt="" />
            </a>
          </router-link>
        </div>
        <!-- Logo -->
        <div class="btn-extars" v-if="!isLoggedIn">
          <ul class="account-btns">
            <li class="signup-popup" id="registerBtn" @click='signupPopup'>
              <a title=""> <i class="la la-key"> </i> Sign Up </a>
            </li>
            <li class="signin-popup" id="loginBtn" @click='loginPopup'>
              <a title="">
                <i class="la la-external-link-square"> </i> Login
              </a>
            </li>
          </ul>
        </div>
        <!-- Btn Extras -->
        <nav>
          <ul>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'Home' }">
                <a href="#" title="">Home </a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'AboutUs' }">
                <a href="#" title="">About Us </a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'HowItWorks' }">
                <a href="#" title="">How It Works</a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'FAQ' }">
                <a href="#" title="">FAQs </a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'ContactUs' }">
                <a href="#" title="">Contact Us </a>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- Menus -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BeforeLoginHeader',
  props: ["isLoggedIn"],
  methods: {
    loginPopup() {
      this.$emit("loginPopup")
    },
    
    signupPopup() {
      this.$emit("signupPopup")
    },
  }
};
</script>

<style>
</style>