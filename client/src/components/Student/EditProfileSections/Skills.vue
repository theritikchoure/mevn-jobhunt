<template>
  <div class="profile-form-edit">

    <form @submit.prevent="handleSubmit">
      <div class="row">

        <div class="col-lg-12">
          <span class="pf-title">Categories</span>
          <div class="pf-field no-margin">
            <ul class="tags">
              <li class="addedTag">
                Photoshop<span
                  onclick="$(this).parent().remove();"
                  class="tagRemove"
                  >x</span
                ><input type="hidden" name="tags[]" value="Photoshop" />
              </li>
              <li class="addedTag">
                Digital & Creative<span
                  onclick="$(this).parent().remove();"
                  class="tagRemove"
                  >x</span
                ><input type="hidden" name="tags[]" value="Digital" />
              </li>
              <li class="addedTag">
                Agency<span
                  onclick="$(this).parent().remove();"
                  class="tagRemove"
                  >x</span
                ><input type="hidden" name="tags[]" value="Agency" />
              </li>
              <li class="tagAdd taglist">
                <input type="text" id="search-field" />
              </li>
            </ul>
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
  name: "EditSkills",
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