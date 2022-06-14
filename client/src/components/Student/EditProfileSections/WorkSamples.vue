<template>
  <div class="profile-form-edit">
   
    <form @submit.prevent="handleSubmit">
      <div class="row">

        <div class="col-lg-6">
          <span class="pf-title">Github</span>
          <div class="pf-field">
            <input
              type="url"
              placeholder="www.github.com/username"
              v-model="formData.github"
              name="github"
            />
            <i class="la la-github"></i>
          </div>
        </div>

        <div class="col-lg-6">
          <span class="pf-title">Linkedin</span>
          <div class="pf-field">
            <input
              type="url"
              placeholder="www.Linkedin.com/in/username"
              v-model="formData.linkedin"
              name="linkedin"
            />
            <i class="la la-linkedin"></i>
          </div>
        </div>

        <div class="col-lg-6">
          <span class="pf-title">Twitter</span>
          <div class="pf-field">
            <input
              type="url"
              placeholder="www.twitter.com/username"
              v-model="formData.twitter"
              name="twitter"
            />
            <i class="la la-twitter"></i>
          </div>
        </div>
        <div class="col-lg-6">
          <span class="pf-title">Website</span>
          <div class="pf-field">
            <input
              type="url"
              placeholder="www.yourdomain.com"
              v-model="formData.website"
              name="website"
            />
            <i class="la la-globe"></i>
          </div>
        </div>

        <div class="col-lg-12 error-message-text" v-if="!isAuthLoading">
          {{ authErrorMsg }}
        </div>

        <div class="col-lg-12">
          <button type="submit" class="profile-update-button">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditWorkSamples",
  props: ["formData"],
  data() {
    return {
      likedInternship: null,
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  created() {},
};
</script>

<style scoped>

.contact-details-edit {
    float: left;
    width: 100%;
}

.contact-details-edit>h3 {
    float: left;
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid #edeff7;
    font-size: 20px;
    color: #202020;
    font-weight: bold;
    margin: 0;
    margin-top: 0px;
    margin-top: 0px;
    margin-top: 0px;
    padding-bottom: 20px;
    padding-left: 30px;
    margin-top: 40px;
}

.profile-update-button {
  margin-bottom: 35px;
}

.error-message-text {
    font-family: 'Open Sans';
    font-size: 13px;
    color: #ff000e;
}

</style>