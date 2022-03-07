<template>
  <div class="job-listing wtabs" >
    <div class="job-title-sec" >
      <div class="c-logo">
        <img src="/images/resource/l5.png" alt="" />
      </div>
      <h3>
        <router-link :to="{ name: 'InternshipDetail', params: { url: internship.url }}">
          {{internship.title}}
        </router-link>
      </h3>
      <span>{{internship.employer.name}}</span>
    </div>
    <div class="job-style-bx">
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InternshipTab",
  props: ["internship"],
  data() {
    return {
      list: true
    };
  },
  components: {},
  computed: { ...mapGetters(["likedInternship", "internshipList"]) },
  methods: {
    ...mapActions(["likeUnlikeToInternship"]),

    async likeUnlikeToThisInternship(url) {
      console.log("Like/Unlike", url);
      await this.likeUnlikeToInternship(url);
      console.log("Liked/Unliked");
    },
  },
};
</script>

<style scoped>
.job-is.pt {
  color: #8b91dd;
  border-color: #8b91dd;
}

.job-is.pt:hover {
  color: #fff;
  border-color: #8b91dd;
  background-color: #8b91dd;
}

.la.la-heart-o.red {
  color: red;
}
</style>
