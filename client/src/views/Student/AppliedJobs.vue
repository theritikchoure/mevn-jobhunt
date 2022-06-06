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
                            <h3>Applied Internships</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Applied Job</td>
                                        <td>Position</td>
                                        <td>Date</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody v-for="internship in appliedInternships" :key="internship.id">
                                    <tr>
                                        <td>
                                            <div class="table-list-title">
                                                <h3><a href="#" title="">{{internship.title}}</a></h3>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-list-title">
                                                <i>{{internship.employer.name}}</i>
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
</style>