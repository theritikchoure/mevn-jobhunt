<template>
  <div>
    <header class="stick-top forsticky">
      <div class="menu-sec">
        <div class="container">
          <div class="logo">
            <router-link :to="{ name: 'Home' }">
              <a  title="">
                <img class="hidesticky" src="/images/resource/logo.png" alt="" />
                <img class="showsticky" src="/images/resource/logo10.png" alt="" />
              </a>
            </router-link>
          </div>
          <!-- Logo -->
          
          <!-- Profile Image -->
          <div class="my-profiles-sec" @click="toggleProfileSidebar">
            <span
              ><img src="/images/resource/mp1.jpg" alt="" /> {{user.name.toUpperCase()}}
              <i class="la la-bars"></i
            ></span>
          </div>

          <!-- Btn Extras -->
          <nav>
            <ul>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'Home' }">
                  Home
                </router-link>
              </li>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'Home' }">
                  Dashboard
                </router-link>
              </li>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'CreateInternship' }">
                  Post Internship
                </router-link>
              </li>
            </ul>

          </nav>
          <!-- Menus -->
        </div>
      </div>
    </header>

    <div class="profile-sidebar" :class="{ active: profileSidebar }">
      <span class="close-profile" @click="toggleProfileSidebar"><i class="la la-close"></i></span>
      <div class="can-detail-s">
        <div class="cst"><img src="/images/resource/es1.jpg" alt="" /></div>
        <h3>{{user.name.toUpperCase()}}</h3>
        <span><i>UX / UI Designer</i> at Atract Solutions</span>
        <p>{{user.email}}</p>
        <p>Member Since, 2017</p>
        <p><i class="la la-map-marker"></i>{{user.state}} / {{user.country}}</p>
      </div>
      <EmployerSidebar />
    </div>
    <!-- Profile Sidebar -->
  </div>
</template>

<script>
import EmployerSidebar from '../Employer/Sidebar.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'EmployerHeader',
  props: ["user"],
  components: { EmployerSidebar },
  data() {
    return {
      profileSidebar: false,
    };
  },
  computed: { },
  methods: {

    toggleProfileSidebar() {
      this.profileSidebar = !this.profileSidebar;
    },
  },
  created() {},
};
</script>

<style>
</style>