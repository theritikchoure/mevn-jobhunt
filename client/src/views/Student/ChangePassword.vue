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
                  <h3>Change Password</h3>
                  <div class="change-password">
                    <form>
                      <div class="row">
                        <div class="col-lg-6">
                          <span class="pf-title">Old Password</span>
                          <div class="pf-field">
                            <input type="password" />
                          </div>
                          <span class="pf-title">New Password</span>
                          <div class="pf-field">
                            <input type="password" />
                          </div>
                          <span class="pf-title">Confirm Password</span>
                          <div class="pf-field">
                            <input type="password" />
                          </div>
                          <button type="submit">Update</button>
                        </div>
                        <div class="col-lg-6">
                          <i class="la la-key big-icon"></i>
                        </div>
                      </div>
                    </form>
                  </div>
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
  name: "StudentChangePassword",
  components: { StudentSidebar },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["loggedInUserCompleteDetails"]),
  },
  created() {
    this.loggedInUserCompleteDetails(this.user.id);
  },
};
</script>

<style>
</style>