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
          <div class="my-profiles-sec">
            <span
              ><img src="/images/resource/mp1.jpg" alt="" /> {{user.name.toUpperCase()}}
              <i class="la la-bars"></i
            ></span>
          </div>
          <div class="wishlist-dropsec">
            <span><i class="la la-heart"></i><strong>3</strong></span>
            <div class="wishlist-dropdown">
              <ul class="scrollbar">
                <li>
                  <div class="job-listing">
                    <div class="job-title-sec">
                      <div class="c-logo">
                        <img src="images/resource/l1.png" alt="" />
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
                        <img src="images/resource/l2.png" alt="" />
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
                        <img src="images/resource/l3.png" alt="" />
                      </div>
                      <h3><a href="#" title="">Marketing Director</a></h3>
                      <span>Tix Dog</span>
                    </div>
                  </div>
                  <!-- Job -->
                </li>
                <li>
                  <div class="job-listing">
                    <div class="job-title-sec">
                      <div class="c-logo">
                        <img src="images/resource/l4.png" alt="" />
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
                        <img src="images/resource/l5.png" alt="" />
                      </div>
                      <h3><a href="#" title="">Web Designer / Developer</a></h3>
                      <span>Massimo Artemisis</span>
                    </div>
                  </div>
                  <!-- Job -->
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <ul>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'Index' }">
                  <a href="#" title="">Home </a>
                </router-link>
              </li>
              <li class="menu-item-has-children">
                <router-link :to="{ name: 'Internships' }">
                  <a href="#" title="">Internships </a>
                </router-link>
              </li>
            </ul>
          </nav>
          <!-- Menus -->
        </div>
      </div>
    </header>

    <div class="profile-sidebar">
      <span class="close-profile"><i class="la la-close"></i></span>
      <div class="can-detail-s">
        <div class="cst"><img src="/images/resource/es1.jpg" alt="" /></div>
        <h3>{{user.name.toUpperCase()}}</h3>
        <span><i>UX / UI Designer</i> at Atract Solutions</span>
        <p>creativelayers088@gmail.com</p>
        <p>Member Since, 2017</p>
        <p><i class="la la-map-marker"></i>Istanbul / Turkey</p>
      </div>
      <StudentSidebar />
    </div>
    <!-- Profile Sidebar -->
  </div>
</template>

<script>
import StudentSidebar from '../../components/StudentSidebar.vue';

export default {
  name: "StudentLoginHeader",
  components: { StudentSidebar },
  props: ['user'],
};
</script>

<style>
</style>