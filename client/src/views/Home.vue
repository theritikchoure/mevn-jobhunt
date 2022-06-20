<template>
  <layout>
    <template v-slot:section>
      <!-- Hero Section (Start)  -->
      <section>
        <div class="block no-padding">
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="main-featured-sec">
                  <div class="new-slide">
                    <img src="images/resource/vector-1.png" />
                  </div>
                  <div class="job-search-sec">
                    <div class="job-search">
                      <h3>The Easiest Way to Get Your New Job</h3>
                      <span>Find Jobs, Employment & Career Opportunities </span>
                    </div>
                  </div>
                  <div class="scroll-to">
                    <a href="#scroll-here" title="">
                      <i class="la la-arrow-down"> </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero Section (End) -->


    <!-- Featured Internships (start) -->
    <section id="scroll-here" >
      <div class="block">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="heading">
                        <h2>Featured Jobs</h2>
                        <span>Leading Employers already using job and talent.</span>
                    </div>
                    <!-- Heading -->
                    <div class="job-listings-sec" v-if="internships">
                        <!-- Job -->
                        <div v-for="internship in internships" :key="internship.id">
                          <InternshipTab :internship="internship"/>
                        </div>
                    </div>
                    
                    <div class="job-listings-sec" v-else>
                        <!-- Job -->
                        <div v-for="internship in dummyInternships" :key="internship.id">
                          <InternshipTab :internship="internship"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="browse-all-cat">
                        <router-link v-if="JSON.stringify(user) !== '{}'"
                          :to="{ name: 'Internships'}"
                        >
                          More Internships
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    <!-- Featured Internships (end) -->

      <!-- Brands Logos Section (Start)  -->
      <section>
        <div class="block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading">
                  <h2>Companies We've Helped</h2>
                  <span
                    >Some of the companies we've helped recruit excellent
                    applicants over the years.
                  </span>
                </div>
                <!-- Heading -->
                <div class="comp-sec">
                  <div class="company-img">
                    <a href="#" title="">
                      <img src="images/resource/cc1.jpg" alt="" />
                    </a>
                  </div>
                  <!-- Client  -->
                  <div class="company-img">
                    <a href="#" title="">
                      <img src="images/resource/cc2.jpg" alt="" />
                    </a>
                  </div>
                  <!-- Client  -->
                  <div class="company-img">
                    <a href="#" title="">
                      <img src="images/resource/cc3.jpg" alt="" />
                    </a>
                  </div>
                  <!-- Client  -->
                  <div class="company-img">
                    <a href="#" title="">
                      <img src="images/resource/cc4.jpg" alt="" />
                    </a>
                  </div>
                  <!-- Client  -->
                  <div class="company-img">
                    <a href="#" title="">
                      <img src="images/resource/cc5.jpg" alt="" />
                    </a>
                  </div>
                  <!-- Client  -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Brands Logos Section (End)  -->

      <!-- Make A Difference Section (Start) -->
      <section>
        <div class="block double-gap-top double-gap-bottom">
          <div
            data-velocity="-.1"
            style="
              background: url(images/resource/parallax1.jpg) repeat scroll 50%
                422.28px transparent;
            "
            class="parallax scrolly-invisible layer color"
          ></div>
          <!-- PARALLAX BACKGROUND IMAGE -->
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="simple-text-block">
                  <h3>Make a Difference with Your Online Resume!</h3>
                  <span
                    >Your resume in minutes with JobHunt resume assistant is
                    ready!
                  </span>
                  <!-- <a href="#" title="">Create an Account </a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Make A Difference Section (End) -->

      <!-- Need Help Section (Start) -->
      <section>
        <div class="block no-padding">
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="simple-text">
                  <h3>Gat a question?</h3>
                  <span
                    >We're here to help. Check out our FAQs, send us an email or
                    call us at 1 (800) 555-5555
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Need Help Section (End) -->
    </template>
  </layout>
</template>

<script>
import Layout from "./Layout/Layout.vue";
import InternshipTab from '../components/Internship/TabForHome.vue';
import { mapGetters } from "vuex";
import dummyInternshipData from "../helpers/dummyData.json";
export default {
  name: "Home",
  data() {
    return {
      dummyInternships: dummyInternshipData
    }
  },
  components: { Layout, InternshipTab },
  computed: { ...mapGetters(["internships", "user"]) },
  mounted() {},
  methods: {},
};
</script>

<style></style>
