<template>
  <div class="job-listing">
    <div class="job-title-sec">
      <div class="c-logo"><img src="images/resource/l1.png" alt="" /></div>

      <h3 v-if="JSON.stringify(user) !== '{}'">
          <router-link :to="{ name: 'InternshipDetails', params: { url: internship.url }}">
            {{internship.title}}
          </router-link>
      </h3>
      <h3 v-else>
          <a @click="warningMsg('Login First')">
            {{internship.title}}
          </a>
      </h3>

      <span>{{internship.employer.name}}</span>
    </div>
    <span class="job-lctn"
      ><i class="la la-tag"></i>{{internship.category}}</span
    >
    <span class="fav-job"><i class="la la-heart-o"></i></span>

    <router-link v-if="JSON.stringify(user) !== '{}'"
        :to="{ name: 'InternshipDetails', params: { url: internship.url }}"
    >
        <span class="job-is ft apply-btn" >Apply Now</span>
    </router-link>
    <a v-else @click="warningMsg('Login First')">
        <span class="job-is ft apply-btn"  >Apply Now</span>
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { notifyWarning } from '../../utils/notify';

export default {
  name: "InternshipTab",
  props: ["internship"],
  data() {
    return {};
  },
  setup () {
    const warningMsg = (msg) => {
        notifyWarning(msg);
    }
    return { warningMsg }
  },
  computed: { ...mapGetters(["user"]) },
  mounted() {},
  methods: {
    run() {
        console.log(user)
    },
  },
  created() {
    // console.log(user);
  },
};
</script>
<style scoped>
.apply-btn:hover {
    cursor: pointer;
}
</style>