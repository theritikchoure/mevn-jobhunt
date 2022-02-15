<template>
  <div>
    <div class="responsive-header">
      <div class="responsive-menubar">
        <div class="res-logo">
          <router-link :to="{ name: 'Index' }">
            <a href="index.html" title="">
              <img src="images/resource/logo.png" alt="" />
            </a>
          </router-link>
        </div>
        <div class="menu-resaction">
          <div class="res-openmenu">
            <img src="images/icon.png" alt="" /> Menu
          </div>
          <div class="res-closemenu">
            <img src="images/icon2.png" alt="" /> Close
          </div>
        </div>
      </div>
      <div class="responsive-opensec">
        <div class="btn-extars">
          <ul class="account-btns">
            <li class="signup-popup">
              <a title=""> <i class="la la-key"> </i> Sign Up </a>
            </li>
            <li class="signin-popup">
              <a title="">
                <i class="la la-external-link-square"> </i> Login
              </a>
            </li>
          </ul>
        </div>
        <!-- Btn Extras -->
        <form class="res-search">
          <input
            type="text"
            placeholder="Job title, keywords or company name"
          />
          <button type="submit">
            <i class="la la-search"> </i>
          </button>
        </form>
        <div class="responsivemenu">
          <ul>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'Index' }">
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
        </div>
      </div>
    </div>
    <BeforeLoginHeader v-if="!isLoggedIn"/>
    <StudentLoginHeader v-else :user="user" />
  </div>
</template>

<script>
import BeforeLoginHeader from './BeforeLoginHeader.vue'
import StudentLoginHeader from './StudentLoginHeader.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: { BeforeLoginHeader, StudentLoginHeader },
  data() {
    return {

    };
  },
  computed: { ...mapGetters(["user", "token", "isLoading", "isLoggedIn"]) },
  mounted() {
    console.log(this.isLoggedIn)
  },
  methods: {
    ...mapActions(["loggedInUser"]),
  },
  created() {
    this.loggedInUser();
  },
};
</script>
