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
                <div class="col-lg-9 column">
                    <div class="padding-left">
                      <div class="manage-jobs-sec">
                        <h3>Dashboard</h3>
                        <div class="cat-sec">
                            <div class="row no-gape">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="p-category">
                                <a href="#" title="">
                                    <i class="la la-briefcase"></i>
                                    <span>Applied Job</span>
                                    <p>14 Applications</p>
                                </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="p-category view-resume-list">
                                <a href="#" title="">
                                    <i class="la la-eye"></i>
                                    <span>View Resume</span>
                                    <p>22 View Statistic</p>
                                </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="p-category">
                                <a href="#" title="">
                                    <i class="la la-file-text"></i>
                                    <span>My Resume</span>
                                    <p>Create New Resume</p>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="cat-sec">
                            <div class="row no-gape">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="p-category">
                                <a href="#" title="">
                                    <i class="la la-check"></i>
                                    <span>Appropriate For Me</span>
                                    <p>(05 Jobs)</p>
                                </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="p-category follow-companies-popup">
                                <a href="#" title="">
                                    <i class="la la-user"></i>
                                    <span>Follow Companies</span>
                                    <p>56 Companies</p>
                                </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="p-category">
                                <a href="#" title="">
                                    <i class="la la-file"></i>
                                    <span>My Profile</span>
                                    <p>View Profile</p>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                      </div>
                        <div class="manage-jobs-sec">
                            <h3>Applied Internships</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Applied Job</td>
                                        <td>Employer/Company Name</td>
                                        <td>Date</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody v-for="internship in appliedInternships" :key="internship.id">
                                    <tr>
                                        <td>
                                            <div class="table-list-title">
                                                <h3>
                                                    <router-link :to="{ name: 'InternshipDetails', params: { url: internship.url }}">
                                                        {{internship.title}}
                                                    </router-link>
                                                </h3>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-list-title">
                                                <router-link :to="{ name: 'EmployersProfile', params: { url: internship.employer.url }}">
                                                    <i>{{internship.employer.name}}</i>
                                                </router-link>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{{internship.last_date}}</span><br />
                                        </td>
                                        <td>
                                            <ul class="action_job">
                                                <li>
                                                    <span>Revert</span>
                                                    <a href="#" title=""
                                                    @click.prevent="applyToThisInternship(internship.url)">
                                                      <i class="la la-trash-o"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
import { notifySuccess } from '../../utils/notify';

export default {
  name: "AppliedJobs",
  data() {
    return {
      formData: null
    };
  },
  components: { Layout, StudentWelcomeBanner, StudentSidebar },
  computed: { ...mapGetters(["appliedInternships", "isLoading"]) },
  setup () {
    const successMsg = (msg) => {
        notifySuccess(msg);
    }
    return { successMsg }
  },
  methods: {
    ...mapActions(["fetchAppliedInternships", "applyToInternship"]),

    async applyToThisInternship(url){

      await this.applyToInternship(url);
      await this.fetchAppliedInternships();
      this.successMsg('Application reverted!')
    },

  },
  created() {
    this.fetchAppliedInternships();
  },
  mounted() {},
};
</script>

<style scoped>
.table-list-title>a>i {
    font-family: Open Sans;
    font-size: 13px;
    color: #8b91dd;
    font-style: normal;
    margin-bottom: 1px;
    float: left;
}
</style>