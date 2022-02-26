<template>
  <div>
    <div class="responsive-header">
      <div class="responsive-menubar">
        <div class="res-logo">
          <router-link :to="{ name: 'Index' }">
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
              <a title="">
                <i class="la la-external-link-square"> </i> Login
              </a>
            </li>
          </ul>
        </div>
        <!-- Btn Extras -->
        <!-- Before Login responsive Menu -->
        <div class="responsivemenu">
          <ul>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'Index' }">
                <a href="#" title="">Home </a>
              </router-link>
            </li>
            <li class="menu-item-has-children" v-if="user.role == 'student'">
              <router-link :to="{ name: 'StudentDashboard' }">
                <a href="#" title="">Dashboard </a>
              </router-link>
            </li>
            <li class="menu-item-has-children" v-if="user.role == 'employer'">
              <router-link :to="{ name: 'EmployerDashboard' }">
                <a href="#" title="">Dashboard </a>
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
        </div>
        <!-- Before Login responsive Menu -->
      </div>
    </div>
    <EmployerLoginHeader v-if="user.role == 'employer'" />
    <StudentLoginHeader v-else-if="user.role == 'student'" :user="user" />
    <BeforeLoginHeader v-else @loginPopup="loginPopup" @signupPopup="signupPopup" />
    <LoginPopup v-if="loginShow" @loginPopup="loginPopup" />
    <SignupPopup v-if="signupShow" @signupPopup="signupPopup" />
  </div>
</template>

<script>
import BeforeLoginHeader from './BeforeLoginHeader.vue'
import StudentLoginHeader from './StudentLoginHeader.vue'
import EmployerLoginHeader from './EmployerLoginHeader.vue'
import LoginPopup from '../LoginPopup.vue';
import SignupPopup from '../SignupPopup.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: { BeforeLoginHeader, StudentLoginHeader, 
    EmployerLoginHeader, LoginPopup, SignupPopup, 
  },
  data() {
    return {
      responsiveMenu: false,
      loginShow: false,
      signupShow: false,
    };
  },
  computed: { ...mapGetters(["user", "token", "isLoading", "isLoggedIn"]) },
  mounted() {
    console.log(this.isLoggedIn)
  },
  methods: {
    ...mapActions(["loggedInUser"]),

    resmenu() {
      this.responsiveMenu = !this.responsiveMenu;
    }, 

    loginPopup() {
      this.loginShow = !this.loginShow;
    },
    
    signupPopup() {
      this.signupShow = !this.signupShow;
    }
  },
  created() {
    this.loggedInUser();
  },
};
</script>
