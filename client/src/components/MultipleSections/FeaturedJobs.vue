<template>
  <section>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading">
              <h2>Featured Jobs</h2>
              <span>Leading Employers already using job and talent. </span>
            </div>
            <!-- Heading -->
            <div class="job-listings-sec" v-for="(internship, index) in internshipList" :key="internship.id">
              <div class="job-listing" :index="index">
                <div class="job-title-sec">
                  <div class="c-logo">
                    <img src="images/resource/l1.png" alt="" />
                  </div>
                  <h3>
                    <router-link :to="{ name: 'InternshipDetail', params: { url: internship.url }}">
                      {{internship.title}} 
                    </router-link>
                  </h3>
                  <span>{{internship.employer.name}} </span>
                </div>
                <span class="job-lctn">
                </span>
                <span class="fav-job" v-if="likedInternship.includes(internship.id)" @click.prevent="likeUnlikeToThisInternship(internship.url)">
                  <i class="la la-heart-o red"> </i>
                </span>
                <span class="fav-job" @click.prevent="likeUnlikeToThisInternship(internship.url)" v-else>
                  <i class="la la-heart-o"> </i>
                </span>
                <router-link :to="{ name: 'InternshipDetail', params: { url: internship.url }}">
                  <span class="job-is ft">Apply Now </span>
                </router-link>
              </div>
              <!-- Job -->
            </div>
          </div>
          <div class="col-lg-12">
            <div class="browse-all-cat">
              <a href="#" title="">Load More Internships... </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'FeaturedJobs',
  computed: { ...mapGetters(["user", "internshipList", "likedInternship", "isLoading"]) },
  methods: {
    ...mapActions(["fetchAllInternships", "getUsersLikedInternship", "likeUnlikeToInternship"]),

    async likeUnlikeToThisInternship(url){
      console.log("Like/Unlike", url)
      await this.likeUnlikeToInternship(url);
      console.log("Liked/Unliked")
    },
  },
  created() {
    this.fetchAllInternships();
    this.getUsersLikedInternship();
  },
};
</script>

<style scoped>
.job-is.ft {
  cursor: pointer;
}

.job-is.ft:hover {
  color: #fff;
  border-color: #8b91dd;
  background-color: #8b91dd;
}

.la.la-heart-o.red {
  color: red;
}
</style>>
