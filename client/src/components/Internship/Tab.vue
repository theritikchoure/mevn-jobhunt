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
            <router-link :to="{ name: 'Home' }">
              {{ item.title || 'Home' }}
            </router-link>
          </h3>
          <span>{{ item.employer.name || 'ritik' }}</span>
        </div>
        <!-- <div class="job-style-bx">
                    <router-link :to="{ name: 'InternshipDetail', params: { url: internship.url }}">
                        <span class="job-is pt">Apply Now</span>
                    </router-link>
                    <span class="fav-job" @click.prevent="likeUnlikeToThisInternship(internship.url)" v-if="likedInternship.includes(internship.id)">
                        <i class="la la-heart-o red"></i>
                    </span>
                    <span class="fav-job" @click.prevent="likeUnlikeToThisInternship(internship.url)" v-else>
                        <i class="la la-heart-o"> </i>
                    </span>
                    <i>{{internship.created_at}}</i>
                </div> -->
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
  props: ['item'],
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