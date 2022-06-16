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
                  <div class="manage-jobs-sec">
                    <h3>Manage Jobs</h3>
                    <div class="extra-job-info">
                      <span
                        ><i class="la la-clock-o"></i><strong>9</strong> Job
                        Posted</span
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
                      <tbody>
                        <tr>
                          <td>
                            <div class="table-list-title">
                              <h3>
                                <a href="#" title=""
                                  >Web Designer / Developer</a
                                >
                              </h3>
                              <span
                                ><i class="la la-map-marker"></i>Sacramento,
                                California</span
                              >
                            </div>
                          </td>
                          <td>
                            <span class="applied-field">3+ Applied</span>
                          </td>
                          <td>
                            <span>October 27, 2017</span><br />
                            <span>April 25, 2011</span>
                          </td>
                          <td>
                            <span class="status active">Active</span>
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
                        <tr>
                          <td>
                            <div class="table-list-title">
                              <h3>
                                <a href="#" title=""
                                  >Web Designer / Developer</a
                                >
                              </h3>
                              <span
                                ><i class="la la-map-marker"></i>Sacramento,
                                California</span
                              >
                            </div>
                          </td>
                          <td>
                            <span class="applied-field">3+ Applied</span>
                          </td>
                          <td>
                            <span>October 27, 2017</span><br />
                            <span>April 25, 2011</span>
                          </td>
                          <td>
                            <span class="status active">Active</span>
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
                        <tr>
                          <td>
                            <div class="table-list-title">
                              <h3>
                                <a href="#" title=""
                                  >Web Designer / Developer</a
                                >
                              </h3>
                              <span
                                ><i class="la la-map-marker"></i>Sacramento,
                                California</span
                              >
                            </div>
                          </td>
                          <td>
                            <span class="applied-field">3+ Applied</span>
                          </td>
                          <td>
                            <span>October 27, 2017</span><br />
                            <span>April 25, 2011</span>
                          </td>
                          <td>
                            <span class="status">Inactive</span>
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
                        <tr>
                          <td>
                            <div class="table-list-title">
                              <h3>
                                <a href="#" title=""
                                  >Web Designer / Developer</a
                                >
                              </h3>
                              <span
                                ><i class="la la-map-marker"></i>Sacramento,
                                California</span
                              >
                            </div>
                          </td>
                          <td>
                            <span class="applied-field">3+ Applied</span>
                          </td>
                          <td>
                            <span>October 27, 2017</span><br />
                            <span>April 25, 2011</span>
                          </td>
                          <td>
                            <span class="status active">Active</span>
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
    </template>
  </layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import WelcomeBanner from "../../components/UserWelcomeBanner.vue";
import EmployerSidebar from "../../components/Employer/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";
import { notifySuccess } from "../../utils/notify";

export default {
  name: "EmployerDashboard",
  data() {
    return {
      formData: null,
    };
  },
  components: { Layout, WelcomeBanner, EmployerSidebar },
  computed: { ...mapGetters(["isLoading"]) },
  setup() {
    const successMsg = (msg) => {
      notifySuccess(msg);
    };
    return { successMsg };
  },
  methods: {
    ...mapActions([]),
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
</style>