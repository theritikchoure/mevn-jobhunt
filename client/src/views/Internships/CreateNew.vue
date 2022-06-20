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
                    <InternshipForm />
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
import InternshipForm from "../../components/Internship/Form.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EmployerDashboard",
  data() {
    return {
      showGuidelines: true,
    };
  },
  components: { Layout, WelcomeBanner, EmployerSidebar, Guidelines, InternshipForm },
  computed: { ...mapGetters(["isLoading"]) },
  methods: {
    ...mapActions([]),

    toggleSection() {
      this.showGuidelines = !this.showGuidelines;
    },
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