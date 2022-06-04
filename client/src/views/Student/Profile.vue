<template>
  <layout>
    <template v-slot:section>
      <StudentWelcomeBanner />

      <section>
        <div class="block no-padding">
          <div class="container">
            <div class="row no-gape">
              <aside class="col-lg-3 column border-right">
                <div class="widget">
                  <StudentSidebar />
                </div>
              </aside>
              <div class="col-lg-9 column" v-if="formData !== null">
                <div class="padding-left">
                  <div class="profile-title">
                    <h3>My Profile</h3>
                    <div class="upload-img-bar">
                      <span class="round"
                        ><img src="/images/resource/mpf1.jpg" alt="" /><i
                          >x</i
                        ></span
                      >
                      <div class="upload-info">
                        <a href="#" title="">Browse</a>
                        <span
                          >Max file size is 1MB, Minimum dimension: 270x210 And
                          Suitable files are .jpg & .png</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="profile-form-edit">
                    <form @submit.prevent="handleSubmit">
                      <div class="row">
                        <div class="col-lg-6">
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

                        <div class="col-lg-6">
                          <span class="pf-title"
                            >Current Educational Level</span
                          >
                          <div class="pf-field">
                            <select
                              data-placeholder="Please Select Education Level"
                              class="chosen"
                              v-model="formData.education"
                              name="education"
                            >
                              <option value="">Select Education Level</option>
                              <option value="Diploma">Diploma</option>
                              <option value="Bachelors">Bachelors</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Categories</span>
                          <div class="pf-field no-margin">
                            <ul class="tags">
                              <li class="addedTag">
                                Photoshop<span
                                  onclick="$(this).parent().remove();"
                                  class="tagRemove"
                                  >x</span
                                ><input
                                  type="hidden"
                                  name="tags[]"
                                  value="Photoshop"
                                />
                              </li>
                              <li class="addedTag">
                                Digital & Creative<span
                                  onclick="$(this).parent().remove();"
                                  class="tagRemove"
                                  >x</span
                                ><input
                                  type="hidden"
                                  name="tags[]"
                                  value="Digital"
                                />
                              </li>
                              <li class="addedTag">
                                Agency<span
                                  onclick="$(this).parent().remove();"
                                  class="tagRemove"
                                  >x</span
                                ><input
                                  type="hidden"
                                  name="tags[]"
                                  value="Agency"
                                />
                              </li>
                              <li class="tagAdd taglist">
                                <input type="text" id="search-field" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Description</span>
                          <div class="pf-field">
                            <textarea  v-model="formData.about" name="about">
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
                            </textarea>
                          </div>
                        </div>

                        <div class="contact-details-edit">
                            <h3>Social</h3>
                        </div>
                        
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

                        <div class="contact-details-edit">
                            <h3>Contact</h3>
                        </div>

                        <div class="col-lg-6">
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
                        <!-- <VuePhoneNumberInput v-model="phone" /> -->
                        <div class="col-lg-6">
                          <span class="pf-title">Email</span>
                          <div class="pf-field">
                            <input type="text" placeholder="demo@jobhunt.com"  v-model="formData.email" name="email"
                             :readonly="true" />
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
                          {{authErrorMsg}}
                        </div>

                        <div class="col-lg-12">
                          <button type="submit" class="profile-update-button">Update</button>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import StudentWelcomeBanner from "../../components/UserWelcomeBanner.vue";
import StudentSidebar from "../../components/Student/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";
import VuePhoneNumberInput from 'vue-phone-number-input';
import { notifySuccess } from '../../utils/notify';

export default {
  name: "Home",
  data() {
    return {
      formData: null
    };
  },
  components: { Layout, StudentWelcomeBanner, StudentSidebar, VuePhoneNumberInput },
  computed: { ...mapGetters(["userDetails", "authErrorMsg"]) },
  setup () {
    const successMsg = (msg) => {
        notifySuccess(msg);
    }
    return { successMsg }
  },
  methods: {
    ...mapActions(["loggedInUserCompleteDetails", "updateProfile"]),

    async loadUserDetails() {
      const response = await this.loggedInUserCompleteDetails();
      console.log(response)
      this.formData = JSON.parse(JSON.stringify(response))
    },

    async handleSubmit() {
      console.log(this.formData);
      const response = await this.updateProfile(this.formData)
      if(response) {
        this.successMsg('Profile Updated Successfully')
      }
    },
  },
  created() {
    this.loadUserDetails();
  },
  mounted() {},
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