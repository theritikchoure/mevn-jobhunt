<template>
  <div>
    <div class="responsive-header">
      <div class="responsive-menubar">
        <div class="res-logo">
          <router-link :to="{name: 'Index'}">
          <a href="index.html" title="">
            <img src="images/resource/logo.png" alt="" />
          </a>
          </router-link>
        </div>
        <div class="menu-resaction">
          <div class="res-openmenu">
            <img src="images/icon.png" alt="" /> Menu
          </div>
          <div class="res-closemenu">
            <img src="images/icon2.png" alt="" /> Close
          </div>
        </div>
      </div>
      <div class="responsive-opensec">
        <div class="btn-extars">
          <a href="#" title="" class="post-job-btn">
            <i class="la la-plus"> </i>Post Jobs
          </a>
          <ul class="account-btns">
            <li class="signup-popup">
              <a title=""> <i class="la la-key"> </i> Sign Up </a>
            </li>
            <li class="signin-popup">
              <a title="">
                <i class="la la-external-link-square"> </i> Login
              </a>
            </li>
          </ul>
        </div>
        <!-- Btn Extras -->
        <form class="res-search">
          <input
            type="text"
            placeholder="Job title, keywords or company name"
          />
          <button type="submit">
            <i class="la la-search"> </i>
          </button>
        </form>
        <div class="responsivemenu">
          <ul>
            <li class="menu-item-has-children">
              <a href="#" title="">Home </a>
              <i class="la la-plus"> </i>
              <ul>
                <li>
                  <a href="index.html" title="">Home Layout 1 </a>
                </li>
                <li>
                  <a href="index2.html" title="">Home Layout 2 </a>
                </li>
                <li>
                  <a href="index3.html" title="">Home Layout 3 </a>
                </li>
                <li>
                  <a href="index4.html" title="">Home Layout 4 </a>
                </li>
                <li>
                  <a href="index5.html" title="">Home Layout 5 </a>
                </li>
                <li>
                  <a href="index6.html" title="">Home Layout 6 </a>
                </li>
                <li>
                  <a href="index7.html" title="">Home Layout 7 </a>
                </li>
                <li>
                  <a href="index8.html" title="">Home Layout 8 </a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#" title="">Employers </a>
              <ul>
                <li>
                  <a href="employer_list1.html" title=""> Employer List 1 </a>
                </li>
                <li>
                  <a href="employer_list2.html" title="">Employer List 2 </a>
                </li>
                <li>
                  <a href="employer_list3.html" title="">Employer List 3 </a>
                </li>
                <li>
                  <a href="employer_list4.html" title="">Employer List 4 </a>
                </li>
                <li>
                  <a href="employer_single1.html" title=""
                    >Employer Single 1
                  </a>
                </li>
                <li>
                  <a href="employer_single2.html" title=""
                    >Employer Single 2
                  </a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#" title="">Employer Dashboard </a>
                  <ul>
                    <li>
                      <a href="employer_manage_jobs.html" title=""
                        >Employer Job Manager
                      </a>
                    </li>
                    <li>
                      <a href="employer_packages.html" title=""
                        >Employer Packages
                      </a>
                    </li>
                    <li>
                      <a href="employer_post_new.html" title=""
                        >Employer Post New
                      </a>
                    </li>
                    <li>
                      <a href="employer_profile.html" title=""
                        >Employer Profile
                      </a>
                    </li>
                    <li>
                      <a href="employer_resume.html" title=""
                        >Employer Resume
                      </a>
                    </li>
                    <li>
                      <a href="employer_transactions.html" title=""
                        >Employer Transaction
                      </a>
                    </li>
                    <li>
                      <a href="employer_job_alert.html" title=""
                        >Employer Job Alert
                      </a>
                    </li>
                    <li>
                      <a href="employer_change_password.html" title=""
                        >Employer Change Password
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#" title="">Candidates </a>
              <ul>
                <li>
                  <a href="candidates_list.html" title="">Candidates List 1 </a>
                </li>
                <li>
                  <a href="candidates_list2.html" title=""
                    >Candidates List 2
                  </a>
                </li>
                <li>
                  <a href="candidates_list3.html" title=""
                    >Candidates List 3
                  </a>
                </li>
                <li>
                  <a href="candidates_single.html" title=""
                    >Candidates Single 1
                  </a>
                </li>
                <li>
                  <a href="candidates_single2.html" title=""
                    >Candidates Single 2
                  </a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#" title="">Candidates Dashboard </a>
                  <ul>
                    <li>
                      <a href="candidates_my_resume.html" title=""
                        >Candidates Resume
                      </a>
                    </li>
                    <li>
                      <a href="candidates_my_resume_add_new.html" title=""
                        >Candidates Resume new
                      </a>
                    </li>
                    <li>
                      <a href="candidates_profile.html" title=""
                        >Candidates Profile
                      </a>
                    </li>
                    <li>
                      <a href="candidates_shortlist.html" title=""
                        >Candidates Shortlist
                      </a>
                    </li>
                    <li>
                      <a href="candidates_job_alert.html" title=""
                        >Candidates Job Alert
                      </a>
                    </li>
                    <li>
                      <a href="candidates_dashboard.html" title=""
                        >Candidates Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="candidates_cv_cover_letter.html" title=""
                        >CV Cover Letter
                      </a>
                    </li>
                    <li>
                      <a href="candidates_change_password.html" title=""
                        >Change Password
                      </a>
                    </li>
                    <li>
                      <a href="candidates_applied_jobs.html" title=""
                        >Candidates Applied Jobs
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#" title="">Blog </a>
              <ul>
                <li>
                  <a href="blog_list.html"> Blog List 1 </a>
                </li>
                <li>
                  <a href="blog_list2.html">Blog List 2 </a>
                </li>
                <li>
                  <a href="blog_list3.html">Blog List 3 </a>
                </li>
                <li>
                  <a href="blog_single.html">Blog Single </a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#" title="">Job </a>
              <ul>
                <li>
                  <a href="job_list_classic.html">Job List Classic </a>
                </li>
                <li>
                  <a href="job_list_grid.html">Job List Grid </a>
                </li>
                <li>
                  <a href="job_list_modern.html">Job List Modern </a>
                </li>
                <li>
                  <a href="job_single1.html">Job Single 1 </a>
                </li>
                <li>
                  <a href="job_single2.html">Job Single 2 </a>
                </li>
                <li>
                  <a href="job-single3.html">Job Single 3 </a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#" title="">Pages </a>
              <ul>
                <li>
                  <a href="about.html" title="">About Us </a>
                </li>
                <li>
                  <a href="404.html" title="">404 Error </a>
                </li>
                <li>
                  <a href="contact.html" title="">Contact Us 1 </a>
                </li>
                <li>
                  <a href="contact2.html" title="">Contact Us 2 </a>
                </li>
                <li>
                  <a href="faq.html" title="">FAQ's </a>
                </li>
                <li>
                  <a href="how_it_works.html" title="">How it works </a>
                </li>
                <li>
                  <a href="login.html" title="">Login </a>
                </li>
                <li>
                  <a href="pricing.html" title="">Pricing Plans </a>
                </li>
                <li>
                  <a href="register.html" title="">Register </a>
                </li>
                <li>
                  <a href="terms_and_condition.html" title=""
                    >Terms & Condition
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <header class="stick-top forsticky">
      <div class="menu-sec">
        <div class="container">
          <div class="logo">
            <router-link :to="{name: 'Index'}">
            <a href="#" title="">
              <img class="hidesticky" src="images/resource/logo.png" alt="" />
              <img class="showsticky" src="images/resource/logo10.png" alt="" />
            </a>
            </router-link>
          </div>
          <!-- Logo -->
          <div class="btn-extars">
            <a href="#" title="" class="post-job-btn">
              <i class="la la-plus"> </i>Post Jobs
            </a>
            <ul class="account-btns">
              <li class="signup-popup">
                <a title=""> <i class="la la-key"> </i> Sign Up </a>
              </li>
              <li class="signin-popup">
                <a title="">
                  <i class="la la-external-link-square"> </i> Login
                </a>
              </li>
            </ul>
          </div>
          <!-- Btn Extras -->
          <nav>
            <ul>
              <li class="menu-item-has-children">
                <a href="#" title="">Home </a>
                <i class="la la-angle-down"> </i>
                <ul>
                  <li>
                    <a href="index.html" title="">Home Layout 1 </a>
                  </li>
                  <li>
                    <a href="index2.html" title="">Home Layout 2 </a>
                  </li>
                  <li>
                    <a href="index3.html" title="">Home Layout 3 </a>
                  </li>
                  <li>
                    <a href="index4.html" title="">Home Layout 4 </a>
                  </li>
                  <li>
                    <a href="index5.html" title="">Home Layout 5 </a>
                  </li>
                  <li>
                    <a href="index6.html" title="">Home Layout 6 </a>
                  </li>
                  <li>
                    <a href="index7.html" title="">Home Layout 7 </a>
                  </li>
                  <li>
                    <a href="index8.html" title="">Home Layout 8 </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#" title="">Employers </a>
                <i class="la la-angle-down"> </i>
                <ul>
                  <li>
                    <a href="employer_list1.html" title=""> Employer List 1 </a>
                  </li>
                  <li>
                    <a href="employer_list2.html" title="">Employer List 2 </a>
                  </li>
                  <li>
                    <a href="employer_list3.html" title="">Employer List 3 </a>
                  </li>
                  <li>
                    <a href="employer_list4.html" title="">Employer List 4 </a>
                  </li>
                  <li>
                    <a href="employer_single1.html" title=""
                      >Employer Single 1
                    </a>
                  </li>
                  <li>
                    <a href="employer_single2.html" title=""
                      >Employer Single 2
                    </a>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" title="">Employer Dashboard </a>
                    <ul>
                      <li>
                        <a href="employer_manage_jobs.html" title=""
                          >Employer Job Manager
                        </a>
                      </li>
                      <li>
                        <a href="employer_packages.html" title=""
                          >Employer Packages
                        </a>
                      </li>
                      <li>
                        <a href="employer_post_new.html" title=""
                          >Employer Post New
                        </a>
                      </li>
                      <li>
                        <a href="employer_profile.html" title=""
                          >Employer Profile
                        </a>
                      </li>
                      <li>
                        <a href="employer_resume.html" title=""
                          >Employer Resume
                        </a>
                      </li>
                      <li>
                        <a href="employer_transactions.html" title=""
                          >Employer Transaction
                        </a>
                      </li>
                      <li>
                        <a href="employer_job_alert.html" title=""
                          >Employer Job Alert
                        </a>
                      </li>
                      <li>
                        <a href="employer_change_password.html" title=""
                          >Employer Change Password
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#" title="">Candidates </a>
                <i class="la la-angle-down"> </i>
                <ul>
                  <li>
                    <a href="candidates_list.html" title=""
                      >Candidates List 1
                    </a>
                  </li>
                  <li>
                    <a href="candidates_list2.html" title=""
                      >Candidates List 2
                    </a>
                  </li>
                  <li>
                    <a href="candidates_list3.html" title=""
                      >Candidates List 3
                    </a>
                  </li>
                  <li>
                    <a href="candidates_single.html" title=""
                      >Candidates Single 1
                    </a>
                  </li>
                  <li>
                    <a href="candidates_single2.html" title=""
                      >Candidates Single 2
                    </a>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" title="">Candidates Dashboard </a>
                    <ul>
                      <li>
                        <a href="candidates_my_resume.html" title=""
                          >Candidates Resume
                        </a>
                      </li>
                      <li>
                        <a href="candidates_my_resume_add_new.html" title=""
                          >Candidates Resume new
                        </a>
                      </li>
                      <li>
                        <a href="candidates_profile.html" title=""
                          >Candidates Profile
                        </a>
                      </li>
                      <li>
                        <a href="candidates_shortlist.html" title=""
                          >Candidates Shortlist
                        </a>
                      </li>
                      <li>
                        <a href="candidates_job_alert.html" title=""
                          >Candidates Job Alert
                        </a>
                      </li>
                      <li>
                        <a href="candidates_dashboard.html" title=""
                          >Candidates Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="candidates_cv_cover_letter.html" title=""
                          >CV Cover Letter
                        </a>
                      </li>
                      <li>
                        <a href="candidates_change_password.html" title=""
                          >Change Password
                        </a>
                      </li>
                      <li>
                        <a href="candidates_applied_jobs.html" title=""
                          >Candidates Applied Jobs
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#" title="">Blog </a>
                <i class="la la-angle-down"> </i>
                <ul>
                  <li>
                    <a href="blog_list.html"> Blog List 1 </a>
                  </li>
                  <li>
                    <a href="blog_list2.html">Blog List 2 </a>
                  </li>
                  <li>
                    <a href="blog_list3.html">Blog List 3 </a>
                  </li>
                  <li>
                    <a href="blog_single.html">Blog Single </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#" title="">Job </a>
                <i class="la la-angle-down"> </i>
                <ul>
                  <li>
                    <a href="job_list_classic.html">Job List Classic </a>
                  </li>
                  <li>
                    <a href="job_list_grid.html">Job List Grid </a>
                  </li>
                  <li>
                    <a href="job_list_modern.html">Job List Modern </a>
                  </li>
                  <li>
                    <a href="job_single1.html">Job Single 1 </a>
                  </li>
                  <li>
                    <a href="job_single2.html">Job Single 2 </a>
                  </li>
                  <li>
                    <a href="job-single3.html">Job Single 3 </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#" title="">Pages </a>
                <i class="la la-angle-down"> </i>
                <ul>
                  <li>
                    <a href="about.html" title="">About Us </a>
                  </li>
                  <li>
                    <a href="404.html" title="">404 Error </a>
                  </li>
                  <li>
                    <a href="contact.html" title="">Contact Us 1 </a>
                  </li>
                  <li>
                    <a href="contact2.html" title="">Contact Us 2 </a>
                  </li>
                  <li>
                    <a href="faq.html" title="">FAQ's </a>
                  </li>
                  <li>
                    <a href="how_it_works.html" title="">How it works </a>
                  </li>
                  <li>
                    <a href="login.html" title="">Login </a>
                  </li>
                  <li>
                    <a href="pricing.html" title="">Pricing Plans </a>
                  </li>
                  <li>
                    <a href="register.html" title="">Register </a>
                  </li>
                  <li>
                    <a href="terms_and_condition.html" title=""
                      >Terms & Condition
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- Menus -->
        </div>
      </div>
    </header>
    <!-- Profile Sidebar -->
    <div class="profile-sidebar">
      <span class="close-profile"><i class="la la-close"></i></span>
      <div class="can-detail-s">
        <div class="cst"><img src="images/resource/es1.jpg" alt="" /></div>
        <h3>David CARLOS</h3>
        <span><i>UX / UI Designer</i> at Atract Solutions</span>
        <p>creativelayers088@gmail.com</p>
        <p>Member Since, 2017</p>
        <p><i class="la la-map-marker"></i>Istanbul / Turkey</p>
      </div>
      <div class="tree_widget-sec">
        <ul>
          <li><a href="candidates_profile.html" title=""><i class="la la-file-text"></i>My Profile</a></li>
          <li><a href="candidates_my_resume.html" title=""><i class="la la-briefcase"></i>My Resume</a></li>
          <li><a href="candidates_shortlist.html" title=""><i class="la la-money"></i>Shorlisted Job</a></li>
          <li><a href="candidates_applied_jobs.html" title=""><i class="la la-paper-plane"></i>Applied Job</a></li>
          <li><a href="candidates_job_alert.html" title=""><i class="la la-user"></i>Job Alerts</a></li>
          <li><a href="candidates_cv_cover_letter.html" title=""><i class="la la-file-text"></i>Cv & Cover Letter</a></li>
          <li><a href="candidates_change_password.html" title=""><i class="la la-flash"></i>Change Password</a></li>
          <li><a href="#" title=""><i class="la la-unlink"></i>Logout</a></li>
        </ul>
      </div>
    </div>
    <!-- Profile Sidebar -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      loggedIn: false,
    };
  },
  computed: {
    currentUser() {
      // return this.$store.state.auth.user;
      return this.$store.state.auth.user;
    },
    isLoggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() { 
    if(!this.currentUser) {
      console.warn("User Not LoggedIn")
    } else {
      console.log(this.currentUser)
      this.loggedIn = this.isLoggedIn;
    }
  }
};
</script>
