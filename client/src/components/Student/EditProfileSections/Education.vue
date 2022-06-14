<template>
  <div class="profile-form-edit">

    <form @submit.prevent="handleSubmit">
      <div class="row">
        
        <!-- Graduation Details (Start) -->
        <div class="col-lg-12">
          <span class="pf-title education-title" @click="toggleEducation('graduation')" :aria-expanded="graduation">
            <i class="la la-plus"></i> 
            Add Graduation
          </span> 
        </div>

        <div class="education-form" v-show="graduation">
          <div class="col-lg-12">
            <span class="pf-title">Graduation Status</span>
            <div class="pf-field">
              <div class="row">
                <div class="col-log-6">
                  <input type="radio" id="pursuing" name="graduationStatus" value="pursuing" />
                  <label for="pursuing">Pursuing</label>
                </div>
                <div class="col-log-6">
                  <input type="radio" id="completed" name="graduationStatus" value="completed" />
                  <label for="completed">Completed</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <span class="pf-title">College</span>
            <div class="pf-field">
              <input
                type="text"
                placeholder="e.g. UIT, RGPV"
                name="college"
              />
            </div>
          </div>

          <div class="row">
          <div class="col-lg-6">
            <span class="pf-title">Start Year</span>
            <div class="pf-field">
              <select data-placeholder="Starting Year" class="chosen">
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </select>
            </div>
          </div>
          
          <div class="col-lg-6">
            <span class="pf-title">End Year</span>
            <div class="pf-field">
              <select data-placeholder="Starting Year" class="chosen">
                <option>2027</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
          </div>
          
          <div class="col-lg-6">
            <span class="pf-title">Degree</span>
            <div class="pf-field">
              <select data-placeholder="Starting Year" class="chosen">
                <option>2027</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
        </div>
        <!-- Graduation Details (End) -->

        <!-- Sr. Secondary Details (Start) -->
        <div class="col-lg-12">
          <span class="pf-title education-title" @click="toggleEducation('sr-secondary')" :aria-expanded="srsecondary">
            <i class="la la-plus"></i> 
            Add Senior Secondary (XII)
          </span> 
        </div>

        <div class="education-form" v-show="srsecondary">
          <div class="col-lg-12">
            <span class="pf-title">Full Name</span>
            <div class="pf-field">
              <input
                type="text"
                placeholder="ALI TOFAN"
                v-model="formData.name"
                name="name"
              />
            </div>
          </div>
        </div>
        <!-- Sr. Secondary Details (End) -->

        <!-- Secondary Details (Start) -->
        <div class="col-lg-12">
          <span class="pf-title education-title" @click="toggleEducation('secondary')" :aria-expanded="secondary">
            <i class="la la-plus"></i> 
            Add Secondary (X)
          </span> 
        </div>

        <div class="education-form" v-show="secondary">
          <div class="col-lg-12">
            <span class="pf-title">Full Name</span>
            <div class="pf-field">
              <input
                type="text"
                placeholder="ALI TOFAN"
                v-model="formData.name"
                name="name"
              />
            </div>
          </div>
        </div>
        <!-- Secondary Details (End) -->

        <!-- Diploma Details (Start) -->
        <div class="col-lg-12">
          <span class="pf-title education-title" @click="toggleEducation('diploma')" :aria-expanded="diploma">
            <i class="la la-plus"></i> 
            Add Diploma
          </span> 
        </div>

        <div class="education-form" v-show="diploma">
          <div class="col-lg-12">
            <span class="pf-title">Full Name</span>
            <div class="pf-field">
              <input
                type="text"
                placeholder="ALI TOFAN"
                v-model="formData.name"
                name="name"
              />
            </div>
          </div>
        </div>
        <!-- Diploma Details (End) -->

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
import { notifySuccess } from '../../../utils/notify';
import { mapGetters, mapActions } from "vuex";
const { isEmpty } = require('../../../helpers/validator/customValidation');

export default {
  name: "EditEducation",
  props: ["formData"],
  data() {
    return {
      likedInternship: null,
      errorMessage: '',
      graduation: false,
      srsecondary: false,
      secondary: false,
      diploma: false,
    };
  },
  computed: {...mapGetters(["userDetails", "authErrorMsg", "isAuthLoading"])},
  mounted() {},
  setup () {
    const successMsg = (msg) => {
        notifySuccess(msg);
    }
    return { successMsg }
  },
  methods: {
    ...mapActions(["updateProfile"]),

    toggleEducation(param) {
      this.graduation = param === 'graduation' ? !this.graduation : false;
      this.srsecondary = param === 'sr-secondary' ? !this.srsecondary : false;
      this.secondary = param === 'secondary' ? !this.secondary : false;
      this.diploma = param === 'diploma' ? !this.diploma : false;
    },

    async validateData(object) {

    },

    openSection() {
      this.$emit("openSection", 'personal_details')
    },

    async handleSubmit() {

      console.log(this.formData);

      let error = await this.validateData(this.formData);
      if(error) return;

      this.errorMessage = '';

      const response = await this.updateProfile(this.formData)
      console.log(response);
      if(response) {
        this.successMsg('Profile Updated Successfully')
      }
      
    },
  },
  created() {},
};
</script>

<style scoped>

.education-title {
  color: #ff000e;
  cursor: pointer;
}
.education-title:hover {
  color: #ff0000;
  cursor: pointer;
}

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

.education-form {
  width: 100%;
}

select {
  float: left;
  width: 100%;
  height: 61px;
  padding: 0 15px;
  border: 2px solid #e8ecec;
  font-size: 13px !important;
  color: #888888;
  /* -webkit-border-radius: 8px; */
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}

.chosen {
    color: #444;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0 4px 4px 0;
    padding: 0 0 0 4px;
    max-height: 240px;
    -webkit-overflow-scrolling: touch;
    float: left;
    width: 100%;
    padding: 0 6px;
    margin: 10px 0;
}

.chosen option {
  background: #edebeb;
  line-height: 1.5em!important;
  color: #878787;
}

.chosen option:hover {
  color: #ff000e;
}


</style>