<template>
  <div>
    <ResponsiveMenu :isLoggedIn="isLoggedIn" :user="user" />
    <BeforLoginHeader :isLoggedIn="isLoggedIn" @loginPopup="loginPopup" @signupPopup="signupPopup" />

    <LoginPopup v-if="loginShow" @loginPopup="loginPopup" />
    <SignupPopup v-if="signupShow" @signupPopup="signupPopup" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ResponsiveMenu from '@/components/Header/ResponsiveMenu.vue';
import BeforLoginHeader from '@/components/Header/BeforeLoginHeader.vue';
import LoginPopup from '@/components/AuthPopup/Login.vue';
import SignupPopup from '@/components/AuthPopup/Signup.vue';
export default {
  name: "Header",
  components: { ResponsiveMenu, BeforLoginHeader, LoginPopup, SignupPopup },
  data() {
    return {
      responsiveMenu: false,
      loginShow: false,
      signupShow: false,
    };
  },
  computed: { ...mapGetters(["isLoggedIn", "user"]) },
  mounted() {
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
