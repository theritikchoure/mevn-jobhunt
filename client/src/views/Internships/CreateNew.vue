<template>
  <layout>
    <template v-slot:section>
      <WelcomeBanner />

      <section>
        <div class="block no-padding">
          <div class="container">
            <div class="row no-gape">
              <aside class="col-lg-3 column border-right">
                <div class="widget">
                  <EmployerSidebar />
                </div>
              </aside>
              <div class="col-lg-9 column">
                <div class="padding-left">
                  <div class="profile-title">
                    <h3>Post a New Job</h3>
                    <div class="steps-sec">
                      <div :class="[ showGuidelines ? 'step active' : 'step' ]">
                        <p><i class="la la-info"></i></p>
                        <span>Information</span>
                      </div>
                      <div :class="[ !showGuidelines ? 'step active' : 'step' ]">
                        <p><i class="la la-paper-plane"></i></p>
                        <span>Post New Internship</span>
                      </div>
                    </div>
                  </div>

                  <Guidelines v-if="showGuidelines" @toggleSection="toggleSection" />

                  <div class="profile-form-edit" v-if="!showGuidelines">
                    <form>
                      <div class="row">
                        <div class="col-lg-12">
                          <span class="pf-title">Internship Title</span>
                          <div class="pf-field">
                            <input type="text" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Select Profile</span>
                          <div class="pf-field">
                            <div class="row">
                              <div class="col-lg-6">
                                <input type="radio" name="choose" id="232" v-model="profile" value="a"><label for="232">Last Hour</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="choose" id="wwqe" v-model="profile" value="b"><label for="wwqe">Last 24 hours</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="choose" id="erewr" v-model="profile" value="c"><label for="erewr">Last 7 days</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="choose" id="qwe" v-model="profile" value="d"><label for="qwe">Last 14 days</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="choose" id="wqe" v-model="profile" value="e"><label for="wqe">Last 30 days</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="choose" id="qweqw" v-model="profile" value="f"><label class="nm" for="qweqw">All</label><br />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-lg-12">
                          <span class="pf-title">Internship Type</span>
                          <div class="pf-field">
                            <div class="row">
                              <div class="col-lg-6">
                                <input type="radio" name="internship_type" id="office-type" v-model="type" value="office"><label for="office-type">In Office</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="internship_type" id="wfh-type" v-model="type" value="wfh"><label for="wfh-type">Work From Home</label><br />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Part Time / Full Time</span>
                          <div class="pf-field">
                            <div class="row">
                              <div class="col-lg-6">
                                <input type="radio" name="internship_time" id="full-time" v-model="time" value="full"><label for="full-time">Full Time</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="internship_time" id="part-time" v-model="time" value="part"><label for="part-time">Part Time</label><br />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <span class="pf-title">No. of Openings</span>
                          <div class="pf-field">
                            <input type="number" min="1" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <span class="pf-title">Duration (in months)</span>
                          <div class="pf-field">
                            <input type="number" min="1" max="7"/>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Internship Joining</span>
                          <div class="pf-field">
                            <div class="row">
                              <div class="col-lg-6">
                                <input type="radio" name="internship_joining" id="immediate" v-model="joining" value="immediate"><label for="immediate">Immediate</label><br />
                              </div>
                              <div class="col-lg-6">
                                <input type="radio" name="internship_joining" id="later" v-model="joining" value="later"><label for="later">Later</label><br />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <span class="pf-title">Minimum Qualification</span>
                          <div class="pf-field">
                            <select
                              data-placeholder="Please Select Specialism"
                              class="chosen"
                            >
                              <option>Please Select Minimum Qualification</option>
                              <option>Diploma</option>
                              <option>Bsc</option>
                              <option>B. Tech</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <span class="pf-title">Application Last Date</span>
                          <div class="pf-field">
                            <input type="Date" />
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <span class="pf-title">Stipend</span>
                          <div class="pf-field">
                            <div class="row">
                              <div class="col-lg-4">
                                <input type="radio" name="internship_stipend" id="fixed" v-model="stipend" value="fixed"><label for="fixed">Fixed</label><br />
                              </div>
                              <div class="col-lg-4">
                                <input type="radio" name="internship_stipend" id="negotiable" v-model="stipend" value="negotiable"><label for="negotiable">Negotiable</label><br />
                              </div>
                              <div class="col-lg-4">
                                <input type="radio" name="internship_stipend" id="unpaid" v-model="stipend" value="unpaid"><label for="unpaid">Unpaid</label><br />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12" v-if="stipend === 'fixed'">
                          <span class="pf-title">Salary (per month)</span>
                          <div class="pf-field">
                            <input type="text" />
                          </div>
                        </div>
                        <div class="col-lg-12" v-if="stipend === 'negotiable'">
                          <span class="pf-title">Starting Salary (per month)</span>
                          <div class="pf-field">
                            <input type="text" />
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <span class="pf-title">Perks</span>
                          <div class="pf-field">
                            <div class="row perks-options">
                              <p class="flchek"><input type="checkbox" name="choosetype" id="33r"><label for="33r">Certificate</label></p>
                              <p class="flchek"><input type="checkbox" name="choosetype" id="dsf"><label for="dsf">Flexible Hours</label></p>
                              <p class="flchek"><input type="checkbox" name="choosetype" id="sdd"><label for="sdd">Letter of Recommendation</label></p>
                              <p class="flchek"><input type="checkbox" name="choosetype" id="sadd"><label for="sadd">5 Days Working</label></p>
                              <p class="flchek"><input type="checkbox" name="choosetype" id="assa"><label for="assa">PPO</label></p>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-lg-12">
                          <span class="pf-title">Skill Requirments</span>
                          <div class="pf-field">
                            <ul class="tags">
                              <li class="addedTag">Skills </li> 
                              <li class="addedTag" v-for="skill in selectedSkills" v-bind:key="skill" @click="unSelectSkill(skill)">
                                {{skill}}<span class="tagRemove">x</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="row skill-btns-row">
                            <span class="skill-btns" v-for="skill in skills" v-bind:key="skill" @click="selectSkill(skill)">{{skill}}</span>
                          </div>
                        </div>
                        
                        <div class="col-lg-12">
                          <button @click.prevent="submit">Next</button>
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
import WelcomeBanner from "../../components/UserWelcomeBanner.vue";
import EmployerSidebar from "../../components/Employer/Sidebar.vue";
import Guidelines from "../../components/Internship/Guidelines.vue";
import { mapGetters, mapActions } from "vuex";
import { notifySuccess } from "../../utils/notify";

export default {
  name: "EmployerDashboard",
  data() {
    return {
      formData: null,
      showGuidelines: true,
      profile: '',
      type: '',
      time: '',
      joining: '',
      stipend: '',

      skills: ["html", "css", "javascript", "c++", "node js", "bootstrap", "tailwind", "mocha", "chai", "devops"],
      selectedSkills: [],
    };
  },
  components: { Layout, WelcomeBanner, EmployerSidebar, Guidelines },
  computed: { ...mapGetters(["isLoading"]) },
  setup() {
    const successMsg = (msg) => {
      notifySuccess(msg);
    };
    return { successMsg };
  },
  methods: {
    ...mapActions([]),

    toggleSection() {
      this.showGuidelines = !this.showGuidelines;
    },

    selectSkill(skill) {
      const index = this.skills.indexOf(skill);
      this.skills.splice(index, 1);

      this.selectedSkills.push(skill);

      console.log(skill)
    },

    unSelectSkill(skill) {
      const index = this.selectedSkills.indexOf(skill);
      this.selectedSkills.splice(index, 1);

      this.skills.push(skill);
    },

    submit() {
      console.log(this.profile);
      console.log(this.selectedSkills);
    }

  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.table-list-title > a > i {
  font-family: Open Sans;
  font-size: 13px;
  color: #8b91dd;
  font-style: normal;
  margin-bottom: 1px;
  float: left;
}

select {
  float: left;
  width: 100%;
  height: 61px;
  padding: 0 15px;
  border: 2px solid #e8ecec;
  font-size: 13px !important;
  color: #888888;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}

.profile-form-edit .pf-title, label {
  font-size: 14px;
}

.perks-options {
  margin-left: 0.5%;
}

.skill-btns-row {
  margin-left: 0;
}

.skill-btns {
  background: transparent;
  border: 1px solid #fb236a;
  padding: 6px 25px;
  border-radius: 15px;
  color: black;
  font-weight: 400;
  font-size: 13px;
  margin: 6px;
  cursor: pointer;
}

.addedTag {
  cursor: pointer;
}

</style>