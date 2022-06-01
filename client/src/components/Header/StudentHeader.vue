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

          <!-- wishlist -->
          <div class="wishlist-dropsec">
            <span @click="toggleWishlist"><i class="la la-heart"></i>
              <strong>1</strong>
            </span>
            <div class="wishlist-dropdown" v-if="wishlistShow">
              <ul class="scrollbar">
                <li>
                  <div class="job-listing">
                    <div class="job-title-sec">
                      <div class="c-logo">
                        <img src="/images/resource/l1.png" alt="" />
                      </div>
                      <h3><a href="#" title="">Web Designer / Developer</a></h3>
                      <span>Massimo Artemisis</span>
                    </div>
                  </div>
                  <!-- Job -->
                </li>
                <li>
                  <div class="job-listing">
                    <div class="job-title-sec">
                      <div class="c-logo">
                        <img src="/images/resource/l2.png" alt="" />
                      </div>
                      <h3>
                        <a href="#" title="">C Developer (Senior) C .Net</a>
                      </h3>
                      <span>StarHealth</span>
                    </div>
                  </div>
                  <!-- Job -->
                </li>
                <li>
                  <div class="job-listing">
                    <div class="job-title-sec">
                      <div class="c-logo">
                        <img src="/images/resource/l3.png" alt="" />
                      </div>
                      <h3><a href="#" title="">Marketing Director</a></h3>
                      <span>Tix Dog</span>
                    </div>
                  </div>
                  <!-- Job -->
                </li>
              </ul>
            </div>
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
                <router-link :to="{ name: 'StudentDashboard' }">
                  Dashboard
                </router-link>
              </li>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'Internships' }">
                  Internships
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
      <StudentSidebar />
    </div>
    <!-- Profile Sidebar -->
  </div>
</template>

<script>
import StudentSidebar from '../Student/Sidebar.vue';
export default {
  name: 'StudentHeader',
  props: ["user"],
  components: { StudentSidebar },
  data() {
    return {
      wishlistShow: false,
      profileSidebar: false,
    };
  },
  methods: {
    toggleWishlist() {
      this.wishlistShow = !this.wishlistShow;
      console.log(this.wishlistShow)
    },

    toggleProfileSidebar() {
      this.profileSidebar = !this.profileSidebar;
    }
  }
};
</script>

<style>
</style>