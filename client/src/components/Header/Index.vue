<template>
  <div>
    <ResponsiveMenu :isLoggedIn="isLoggedIn" :user="user" />

    <StudentHeader v-if="user.role == 'student'" :user="user" />
    <BeforLoginHeader v-else :isLoggedIn="isLoggedIn"
      @loginPopup="loginPopup" @signupPopup="signupPopup" />
    

    <LoginPopup v-if="loginShow" @loginPopup="loginPopup" />
    <SignupPopup v-if="signupShow" @signupPopup="signupPopup" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ResponsiveMenu from './ResponsiveMenu.vue';
import BeforLoginHeader from './Header.vue';
import StudentHeader from './StudentHeader.vue';
import LoginPopup from '@/components/AuthPopup/Login.vue';
import SignupPopup from '@/components/AuthPopup/Signup.vue';
export default {
  name: "Header",
  components: { ResponsiveMenu, BeforLoginHeader, StudentHeader, LoginPopup, SignupPopup },
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

    ...mapActions(["loggedInUser", "fetchAllInternships"]),

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
    this.fetchAllInternships();
  },
};
</script>
