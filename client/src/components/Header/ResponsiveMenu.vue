<template>
  <div class="responsive-header">
    <div class="responsive-menubar">
      <div class="res-logo">
        <router-link :to="{ name: 'Home' }">
          <a href="index.html" title="">
            <img src="/images/resource/logo.png" alt="" />
          </a>
        </router-link>
      </div>
      <div class="menu-resaction">
        <div class="res-openmenu" @click="resmenu" v-if="!responsiveMenu">
          <img src="/images/icon.png" alt="" /> Menu
        </div>
        <div class="res-closemenu" @click="resmenu" v-if="responsiveMenu">
          <img src="/images/icon2.png" alt="" /> Close
        </div>
      </div>
    </div>
    <div class="responsive-opensec" v-if="responsiveMenu">
      <div class="btn-extars" v-if="!isLoggedIn">
        <ul class="account-btns">
          <li class="signup-popup" @click="signupPopup">
            <a title=""> <i class="la la-key"> </i> Sign Up </a>
          </li>
          <li class="signin-popup" @click="loginPopup">
            <a title=""> <i class="la la-external-link-square"> </i> Login </a>
          </li>
        </ul>
      </div>
      <!-- Btn Extras -->
      <!-- Before Login responsive Menu -->
      <div class="responsivemenu">
        <ul>
          <li class="menu-item-has-children">
            <router-link :to="{ name: 'Home' }"> Home </router-link>
          </li>
          
          <!-- LoggedIn Student Menu Links (Start) -->
          <li class="menu-item-has-children" v-if="user.role == 'student'">
            <router-link :to="{ name: 'Home' }">
              Dashboard
            </router-link>
          </li>
          <li class="menu-item-has-children" v-if="user.role == 'student'">
              <router-link :to="{ name: 'Home' }">
                Internships
              </router-link>
            </li>
          <!-- LoggedIn Student Menu Links (End) -->
          <!-- LoggedIn Employer Menu Links (Start) -->
          <li class="menu-item-has-children" v-if="user.role == 'employer'">
            <router-link :to="{ name: 'Home' }">
              Dashboard
            </router-link>
          </li>
          <!-- LoggedIn Employer Menu Links (End) -->
          
          <li class="menu-item-has-children">
            <router-link :to="{ name: 'AboutUs' }"> About Us </router-link>
          </li>
          <li class="menu-item-has-children">
            <router-link :to="{ name: 'HowItWorks' }">
              How It Works
            </router-link>
          </li>
          <li class="menu-item-has-children">
            <router-link :to="{ name: 'FAQ' }"> FAQs </router-link>
          </li>
          <li class="menu-item-has-children">
            <router-link :to="{ name: 'ContactUs' }"> Contact Us </router-link>
          </li>
        </ul>
      </div>
      <!-- Before Login responsive Menu -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Responsive Menu",
  components: {},
  props: ["isLoggedIn", "user"],
  data() {
    return {
      responsiveMenu: false,
      loginShow: false,
      signupShow: false,
    };
  },
  computed: {},
  mounted() {
    console.log(this.isLoggedIn)
    console.log(this.user.role)
  },
  methods: {
    resmenu() {
      this.responsiveMenu = !this.responsiveMenu;
    },

    loginPopup() {
      this.loginShow = !this.loginShow;
    },

    signupPopup() {
      this.signupShow = !this.signupShow;
    },
  },
  created() {},
};
</script>
