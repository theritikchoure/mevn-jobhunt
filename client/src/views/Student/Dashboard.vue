<template>
  <div>
    <section class="overlape">
      <div class="block no-padding">
        <div
          data-velocity="-.1"
          style="
            background: url(images/resource/mslider1.jpg) repeat scroll 50%
              422.28px transparent;
          "
          class="parallax scrolly-invisible no-parallax"
        ></div>
        <!-- PARALLAX BACKGROUND IMAGE -->
        <div class="container fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-header">
                <h3>Welcome {{this.currentUser.name}}</h3>
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
                <div class="tree_widget-sec">
                  <ul>
                    <li>
                      <a href="candidates_profile.html" title=""
                        ><i class="la la-file-text"></i>My Profile</a
                      >
                    </li>
                    <li>
                      <a href="candidates_my_resume.html" title=""
                        ><i class="la la-briefcase"></i>My Resume</a
                      >
                    </li>
                    <li>
                      <a href="candidates_shortlist.html" title=""
                        ><i class="la la-money"></i>Shorlisted Job</a
                      >
                    </li>
                    <li>
                      <a href="candidates_applied_jobs.html" title=""
                        ><i class="la la-paper-plane"></i>Applied Job</a
                      >
                    </li>
                    <li>
                      <a href="candidates_job_alert.html" title=""
                        ><i class="la la-user"></i>Job Alerts</a
                      >
                    </li>
                    <li>
                      <a href="candidates_cv_cover_letter.html" title=""
                        ><i class="la la-file-text"></i>Cv & Cover Letter</a
                      >
                    </li>
                    <li>
                      <a href="candidates_change_password.html" title=""
                        ><i class="la la-flash"></i>Change Password</a
                      >
                    </li>
                    <li>
                      <a href="#" title=""
                        ><i class="la la-unlink"></i>Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="widget">
                <div class="skill-perc">
                  <h3>Skills Percentage</h3>
                  <p>
                    Put value for "Cover Image" field to increase your skill up
                    to "15%"
                  </p>
                  <div class="skills-bar">
                    <span>85%</span>
                    <div
                      class="second circle"
                      data-size="155"
                      data-thickness="60"
                    ></div>
                  </div>
                </div>
              </div>
            </aside>
            <div class="col-lg-9 column">
              <div class="padding-left">
                <div class="manage-jobs-sec">
                  <h3>Candidates Dashboard</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StudentDashboard',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() { 
    if(!this.currentUser) {
      console.warn("User Not LoggedIn")
    } else {
      console.log(this.currentUser)
    }
  },
};
</script>

<style>
</style>