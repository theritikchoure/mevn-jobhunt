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
                    <div class="profile-section">
                      <button class="profile-section-btn" @click="openSection('personal_details')">Personal Details</button>
                      <button class="profile-section-btn" @click="openSection('education')">Education</button>
                      <button class="profile-section-btn" @click="openSection('skills')">Skills</button>
                      <button class="profile-section-btn" @click="openSection('work_samples')">Work Samples</button>
                    </div>
                    <!-- Tab content -->
                    <EditPersonalDetails v-if="personal_details" :formData="formData" @openSection="openSection"/>
                    <EditEducation v-if="education" :formData="formData" @openSection="openSection"/>
                    <EditSkills v-if="skills" :formData="formData"/>
                    <EditWorkSamples v-if="work_samples" :formData="formData"/>

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

//Edit Profile Sections
import EditPersonalDetails from "../../components/Student/EditProfileSections/PersonalDetails.vue";
import EditEducation from "../../components/Student/EditProfileSections/Education.vue";
import EditSkills from "../../components/Student/EditProfileSections/Skills.vue";
import EditWorkSamples from "../../components/Student/EditProfileSections/WorkSamples.vue";

export default {
  name: "Home",
  data() {
    return {
      formData: null,
      personal_details: true,
      education: false,
      skills: false,
      work_samples: false,
    };
  },
  components: { Layout, StudentWelcomeBanner, StudentSidebar, VuePhoneNumberInput, 
    EditPersonalDetails, EditEducation, EditSkills, EditWorkSamples },
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

    openSection(sectionName) {
      this.personal_details = sectionName === 'personal_details' ? true : false;
      this.education = sectionName === 'education' ? true : false;
      this.skills = sectionName === 'skills' ? true : false;
      this.work_samples = sectionName === 'work_samples' ? true : false;
    },
  },
  created() {
    this.loadUserDetails();
  },
  mounted() {},
};
</script>

<style scoped>
.profile-section-btn {
    width: 18.33%;
    margin: 15px;
    float: left;
    background: #f4f5fa;
    border-radius: 8px;
    font-family: Open Sans;
    font-size: 13px;
    padding: 7px 17px;
    margin-right: 10px;
    position: relative;
    color: black;
}
</style>