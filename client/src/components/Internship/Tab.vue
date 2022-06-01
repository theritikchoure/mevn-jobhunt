<template>
  <div class="job-listings-sec no-border">
    <!-- Job -->
    <div>
      <div class="job-listing wtabs">
        <div class="job-title-sec">
          <div class="c-logo">
            <img src="/images/resource/l5.png" alt="" />
          </div>
          <h3>
            <!-- <router-link :to="{ name: 'Home', params: { url: internship.url }}"> -->
            <router-link :to="{ name: 'InternshipDetails', params: { url: item.url }}">
              {{ item.title || 'Home' }}
            </router-link>
          </h3>
          <span>{{ item.employer.name || 'ritik' }}</span>
        </div>
        <div class="job-style-bx">
            <router-link :to="{ name: 'InternshipDetails', params: { url: item.url }}">
                <span class="job-is ft">Apply Now</span>
            </router-link>
            <!-- <span class="fav-job" @click.prevent="likeUnlikeToThisInternship(item.url)" v-if="likedInternship.includes(item.id)">
                <i class="la la-heart-o red"></i>
            </span> -->
            <span class="fav-job" @click.prevent="likeUnlikeToThisInternship(item.url)" >
                <i class="la la-heart-o"> </i>
            </span>
            <i>{{item.created_at}}</i>
        </div>
      </div>
    </div>
    <!-- Job -->
  </div>
</template>

<script>
export default {
  name: "InternshipTab",
  data() {
    return {};
  },
  props: {
    item: Object
  },
  computed: { 
  },
  mounted() {
  },
  methods: {
    loginPopup() {
      this.$emit("loginPopup");
    },

    signupPopup() {
      this.$emit("signupPopup");
    },
  },
};
</script>

<style>
</style>