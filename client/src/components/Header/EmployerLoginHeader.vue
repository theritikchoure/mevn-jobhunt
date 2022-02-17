<template>
  <div>
    <header class="stick-top">
      <div class="menu-sec">
        <div class="container">
          <div class="logo">
            <router-link :to="{ name: 'Index' }">
              <img src="/images/resource/logo.png" alt=""/>
            </router-link>
          </div>
          <!-- Logo -->
          <div class="btns-profiles-sec">
            <span><img src="/images/resource/profile.jpg" alt="" /> Tera Planer <i class="la la-angle-down"></i></span>
            <EmployerSidebar />
          </div>
         
          <nav>
            <ul>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'Index' }">
                  Home
                </router-link>
              </li>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'EmployerDashboard' }">
                  Dashboard
                </router-link>
              </li>
            </ul>
          </nav>
          <!-- Menus -->
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import EmployerSidebar from '../EmployerSidebar.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EmployerLoginHeader",
  components: { EmployerSidebar },
  computed: { ...mapGetters(["likedInternship", "isLoading"]) },
  props: ['user'],
  methods: {
    ...mapActions(["getUsersLikedInternship"]),

    // async likeUnlikeToThisInternship(url){
    //   console.log("Like/Unlike", url)
    //   await this.likeUnlikeToInternship(url);
    //   console.log("Liked/Unliked")
    // },
  },
  created() {
    this.getUsersLikedInternship();
  },
};
</script>

<style>
</style>