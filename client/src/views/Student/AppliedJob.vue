<template>
  <div>
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
                <h3>Welcome {{ user.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                  <h3>Manage Internships</h3>
                  <table>
                    <thead>
                      <tr>
                        <td>Position</td>
                        <td>Date</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody v-for="(internship, index) in appliedInternship" :key="internship.id">
                      <tr :index="index">
                        <td>
                          <div class="table-list-title">
                            <i>{{internship.title}}</i><br />
                          </div>
                        </td>
                        <td><span>{{internship.created_at}}</span><br /></td>
                        <td>
                          <ul class="action_job">
                            <li>
                              <span>Revert Application</span>
                              <a @click.prevent="revertApplication(internship.url)">
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
  </div>
</template>

<script>
import StudentSidebar from "../../components/StudentSidebar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StudentAppliedJobs",
  components: { StudentSidebar },
  computed: {
    ...mapGetters(["user", "appliedInternship"]),
  },
  methods: {
    ...mapActions(["appliedInternships", "applyToInternship"]),

    async revertApplication(url){
      console.log("Revert", url)
      await this.applyToInternship(url);
      console.log("Reverted")
    },
  },
  created() {
    this.appliedInternships();
  },
};
</script>

<style>
</style>