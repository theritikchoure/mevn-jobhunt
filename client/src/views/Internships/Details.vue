<template>
  <layout>
    <template v-slot:section>
      <section class="overlape">
        <div class="block no-padding">
          <div
            data-velocity="-.1"
            style="
              background: url(/images/resource/mslider1.jpg) repeat scroll 50%
                422.28px transparent;
            "
            class="parallax scrolly-invisible no-parallax"
          ></div>
          <!-- PARALLAX BACKGROUND IMAGE -->
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="inner-header">
                  <h3>{{ internship.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 column">
                <div class="job-single-sec style3">
                  <div class="job-head-wide">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="job-single-head3">
                          <div class="job-thumb">
                            <img src="/images/resource/sdf.png" alt="" />
                          </div>
                          <div class="job-single-info3">
                            <h3>{{ internship.employer.name }}</h3>
                            <ul class="tags-jobs">
                              <li>
                                <i class="la la-file-text"></i> Applications
                                {{internship.applications.length}}
                              </li>
                              <li>
                                <i class="la la-calendar-o"></i> Post Date:
                                {{ internship.created_at }}
                              </li>
                              <li><i class="la la-eye"></i> Views 5683</li>
                            </ul>
                          </div>
                        </div>
                        <!-- Job Head -->
                      </div>
                      <div class="col-lg-4" v-if="user.role === 'student'">
                        <a class="apply-thisjob"
                          @click.prevent="applyToThisInternship(internship.url, 'revert')"
                          v-if="internship.applications.find(application => application.applicant === user.id)">
                          <i class="la la-paper-plane"></i>
                          <span>
                              Revert Application
                          </span>
                        </a>
                        <a class="apply-thisjob"
                          @click.prevent="applyToThisInternship(internship.url, 'apply')"
                          v-else>
                          <i class="la la-paper-plane"></i>
                          <span>
                              Apply Now
                          </span>
                        </a>
                      </div>
                      <div class="col-lg-4" v-if="user.role === 'employer'">
                        <a class="apply-thisjob">
                          <i class="la la-paper-plane"></i>
                          <span>
                              Only For Students
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="job-wide-devider">
                    <div class="row">
                      <div class="col-lg-8 column">
                        <div class="job-details">
                          <h3>Job Description</h3>
                          <p>{{internship.description}}</p>
                          <h3 v-if="internship.skills.length">Required Knowledge & Skills</h3>
                          <div class="row skill-btns-row">
                            <span
                              class="skill-btns"
                              v-for="skill in internship.skills"
                              v-bind:key="skill"
                              >{{ skill }}</span
                            >
                          </div>
                          <h3 v-if="internship.perks.length">Perks with Internship</h3>
                          <ul>
                            <li v-for="perk in internship.perks" v-bind:key="perk">
                              {{ perk }}
                            </li>
                          </ul>
                        </div>
                        <div class="share-bar">
                          <span>Share</span
                          ><a href="#" title="" class="share-fb"
                            ><i class="la la-facebook"></i></a
                          ><a href="#" title="" class="share-twitter"
                            ><i class="la la-twitter"></i
                          ></a>
                        </div>
                        <div class="recent-jobs">
                          <h3>Recent Jobs</h3>
                          <div class="job-list-modern">
                            <div class="job-listings-sec no-border">
                              <!-- <InternshipTab :internship="internship" /> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 column">
                        <div class="job-overview">
                          <h3>Job Overview</h3>
                          <ul>
                            <li>
                              <i class="las la-briefcase"></i>
                              <h3>No. of Openings Salary</h3>
                              <span>{{internship.no_of_openings}}</span>
                            </li>
                            <li>
                              <i class="las la-hourglass-start"></i>
                              <h3>Duration</h3>
                              <span>{{internship.duration}} months</span>
                            </li>
                            <li>
                              <i class="la la-money"></i>
                              <h3>Paid/Unpaid</h3>
                              <span>{{internship.stipend}}</span>
                            </li>
                            <li v-if="internship.stipend !== 'unpaid'">
                              <i class="la la-money"></i>
                              <h3>Offerd Salary</h3>
                              <span>{{internship.salary}}</span>
                            </li>
                            <li>
                              <i class="la la-line-chart"></i>
                              <h3>Minimum Qualification</h3>
                              <span>{{internship.qualification}}</span>
                            </li>
                            <li>
                              <i class="la la-clock"></i>
                              <h3>Last Date to Apply</h3>
                              <span>{{internship.last_date}}</span>
                            </li>
                          </ul>
                        </div>
                        <!-- Job Overview -->
                      </div>
                    </div>
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
import { mapGetters, mapActions } from "vuex";
import Layout from "../Layout/Layout.vue";
import InternshipTab from "../../components/Internship/Tab.vue";
import { notifyInfo, notifySuccess } from '../../utils/notify';
export default {
  name: "InternshipDetail",
  components: { Layout, InternshipTab },
  props: ['url'],
  data() {
    return {};
  },
  setup () {
    const infoMsg = (msg) => {
        notifyInfo(msg);
    }

    const successMsg = (msg) => {
      notifySuccess(msg)
    }
    return { infoMsg, successMsg }
  },
  computed: {
    ...mapGetters(["internship", "user"]),
  },
  methods: {
    ...mapActions(["fetchDetailInternship", "applyToInternship"]),

    async applyToThisInternship(url, type){
      await this.applyToInternship(url);
      if(type === 'apply') {
        this.successMsg('Application submitted successfully')
      } else {
        this.infoMsg('Application reverted!')
      }
    },
  },
  async created() {
    await this.fetchDetailInternship(this.url);  
    document.title = this.internship.title ? this.internship.title : "Loading internship";
  },
};
</script>

<style scoped>

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

</style>
