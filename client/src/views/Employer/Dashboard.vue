<template>
  <div>
    <EmployerWelcomeBanner />
    <section v-if="!isLoading">
      <div class="block no-padding">
        <div class="container">
          <div class="row no-gape">
            <aside class="col-lg-3 column border-right">
              <div class="widget">
                <div class="tree_widget-sec">
                  <EmployerSidebar />
                </div>
              </div>
            </aside>
            <div class="col-lg-9 column">
              <div class="padding-left">
                <div class="manage-jobs-sec">
                  <h3>Manage Jobs</h3>
                  <div class="extra-job-info">
                    <span
                      ><i class="la la-clock-o"></i
                      ><strong>{{
                        dashboardEmployer.posted_internships
                          ? dashboardEmployer.posted_internships.length
                          : 0
                      }}</strong>
                      Job Posted</span
                    >
                    <span
                      ><i class="la la-file-text"></i
                      ><strong>20</strong> Application</span
                    >
                    <span
                      ><i class="la la-users"></i><strong>18</strong> Active
                      Jobs</span
                    >
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <td>Title</td>
                        <td>Applications</td>
                        <td>Created & Expired</td>
                        <td>Status</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody
                      v-for="(
                        item, index
                      ) in dashboardEmployer.posted_internships || []"
                      :key="index"
                    >
                      <tr>
                        <td>
                          <div class="table-list-title">
                            <h3>
                              <a href="#" title="">{{ item.title }}</a>
                            </h3>
                          </div>
                        </td>
                        <td>
                          <span class="applied-field"
                            >{{ item.applications.length || 0 }} Applied</span
                          >
                        </td>
                        <td>
                          <span>{{ item.created_at }}</span
                          ><br />
                          <span>{{ item.last_date }}</span>
                        </td>
                        <td>
                          <span class="status active">{{
                            item.status === 1 ? "Active" : "Inactive"
                          }}</span>
                        </td>
                        <td>
                          <ul class="action_job">
                            <li>
                              <span>View Job</span
                              ><a href="#" title=""
                                ><i class="la la-eye"></i
                              ></a>
                            </li>
                            <li>
                              <span>Edit</span
                              ><a href="#" title=""
                                ><i class="la la-pencil"></i
                              ></a>
                            </li>
                            <li>
                              <span>Delete</span
                              ><a href="#" title=""
                                ><i class="la la-trash-o"></i
                              ></a>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EmployerSidebar from "../../components/EmployerSidebar.vue";
import EmployerWelcomeBanner from "../../components/UserWelcomeBanner.vue";

export default {
  name: "EmployerDashboard",
  components: { EmployerSidebar, EmployerWelcomeBanner },
  computed: {
    ...mapGetters(["dashboardEmployer", "isLoading"]),

    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    ...mapActions(["employerDashboard"]),
  },
  async created() {
    await this.employerDashboard();
  },
};
</script>

<style scoped>
.manage-jobs-sec {
  overflow-x: auto;
}
</style>