<template>
  <div class="profile-form-edit">
    <div class="upload-img-bar">
      <span class="round"
        ><img src="/images/resource/mpf1.jpg" alt="" /><i>x</i></span
      >
      <div class="upload-info">
        <a href="#" title="">Browse</a>
        <span
          >Max file size is 1MB, Minimum dimension: 270x210 And Suitable files
          are .jpg & .png</span
        >
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="row">
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

        <div class="col-lg-12">
          <span class="pf-title">Description</span>
          <div class="pf-field">
            <textarea v-model="formData.about" name="about">
                              Spent several years working on sheep on Wall Street. 
                              Had moderate success investing in Yugos on Wall Street. 
                              Managed a small team buying and selling pogo sticks for farmers. 
                              Spent several years licensing licorice in West Palm Beach, FL. 
                              Developed severalnew methods for working with banjos in the aftermarket. 
                              Spent a weekend importing banjos in West Palm Beach, FL.
                              In this position, the Software Engineer ollaborates with Evention's 
                              Development team to continuously enhance our current software solutions 
                              as well as create new solutions to eliminate the back-office operations 
                              and management challenges present
                            </textarea
            >
          </div>
        </div>

        <div class="col-lg-12">
          <span class="pf-title">Phone Number</span>
          <div class="pf-field">
            <input
              type="text"
              placeholder="+90 538 963 58 96"
              v-model="formData.mobile"
              name="mobile"
              :readonly="true"
            />
          </div>
        </div>

        <div class="col-lg-12">
          <span class="pf-title">Address</span>
          <div class="pf-field">
            <input
              type="text"
              placeholder="Collins Street West, Victoria 8007, Australia."
              v-model="formData.address"
              name="address"
            />
          </div>
        </div>

        <div class="col-lg-12 error-message-text" v-if="!isAuthLoading">
          {{ authErrorMsg || errorMessage }}
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
  name: "EditPersonalDetails",
  props: ["formData"],
  data() {
    return {
      likedInternship: null,
      errorMessage: '',
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

    async validateData(object) {
        if(isEmpty(object.name)) {
          this.errorMessage = 'Name is required';
          return true;
        }
            
        if(isEmpty(object.about)) {
          this.errorMessage = 'Description is required';
          return true;
        }
            
        if(isEmpty(object.address)) {
          this.errorMessage = 'Address is required';
          return true;
        }
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