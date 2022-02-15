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
                <h3>{{internship.title.toUpperCase()}}</h3>
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
                          <h3>{{internship.employer.name}}</h3>
                          <ul class="tags-jobs">
                            <li>
                              <i class="la la-file-text"></i> Applications 1
                            </li>
                            <li>
                              <i class="la la-calendar-o"></i> Post Date: {{internship.created_at}}
                            </li>
                            <li><i class="la la-eye"></i> Views 5683</li>
                          </ul>
                        </div>
                      </div>
                      <!-- Job Head -->
                    </div>
                    <div class="col-lg-4">
                      <a class="apply-thisjob" href="#" title=""
                        ><i class="la la-paper-plane"></i>Apply for job</a
                      >
                      <div class="apply-alternative">
                        <a href="#" title=""
                          ><i class="la la-linkedin"></i> Apply with Linkedin</a
                        >
                        <span><i class="la la-heart-o"></i> Shortlist</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="job-wide-devider">
                  <div class="row">
                    <div class="col-lg-8 column">
                      <div class="job-details">
                        <h3>Job Description</h3>
                        <p>
                          {{internship.description}}
                        </p>
                        <h3>Required Knowledge, Skills, and Abilities</h3>
                        <ul>
                          <li>
                            Ability to write code – HTML & CSS (SCSS flavor of
                            SASS preferred when writing CSS)
                          </li>
                          <li>
                            Proficient in Photoshop, Illustrator, bonus points
                            for familiarity with Sketch (Sketch is our preferred
                            concepting)
                          </li>
                          <li>
                            Cross-browser and platform testing as standard
                            practice
                          </li>
                          <li>Experience using Invision a plus</li>
                          <li>
                            Experience in video production a plus or, at a
                            minimum, a willingness to learn
                          </li>
                        </ul>
                        <h3>Education + Experience</h3>
                        <ul>
                          <li>
                            Advanced degree or equivalent experience in graphic
                            and web design
                          </li>
                          <li>
                            3 or more years of professional design experience
                          </li>
                          <li>Direct response email experience</li>
                          <li>Ecommerce website design experience</li>
                          <li>
                            Familiarity with mobile and web apps preferred
                          </li>
                          <li>
                            Excellent communication skills, most notably a
                            demonstrated ability to solicit and address creative
                            and design feedback
                          </li>
                          <li>
                            Must be able to work under pressure and meet
                            deadlines while maintaining a positive attitude and
                            providing exemplary customer service
                          </li>
                          <li>
                            Ability to work independently and to carry out
                            assignments to completion within parameters of
                            instructions given, prescribed routines, and
                            standard accepted practices
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
                            <div class="job-listing wtabs">
                              <div class="job-title-sec">
                                <div class="c-logo">
                                  <img src="/images/resource/l1.png" alt="" />
                                </div>
                                <h3>
                                  <a href="#" title=""
                                    >Web Designer / Developer</a
                                  >
                                </h3>
                                <span>Massimo Artemisis</span>
                              </div>
                              <div class="job-style-bx">
                                <span class="job-is ft">Full time</span>
                                <span class="fav-job"
                                  ><i class="la la-heart-o"></i
                                ></span>
                                <i>5 months ago</i>
                              </div>
                            </div>
                            <div class="job-listing wtabs">
                              <div class="job-title-sec">
                                <div class="c-logo">
                                  <img src="/images/resource/l2.png" alt="" />
                                </div>
                                <h3>
                                  <a href="#" title=""
                                    >C Developer (Senior) C .Net</a
                                  >
                                </h3>
                                <span>Massimo Artemisis</span>
                              </div>
                              <div class="job-style-bx">
                                <span class="job-is pt">Part time</span>
                                <span class="fav-job"
                                  ><i class="la la-heart-o"></i
                                ></span>
                                <i>5 months ago</i>
                              </div>
                            </div>
                            <!-- Job -->
                            <div class="job-listing wtabs">
                              <div class="job-title-sec">
                                <div class="c-logo">
                                  <img src="/images/resource/l3.png" alt="" />
                                </div>
                                <h3>
                                  <a href="#" title=""
                                    >Regional Sales Manager South</a
                                  >
                                </h3>
                                <span>Massimo Artemisis</span>
                              </div>
                              <div class="job-style-bx">
                                <span class="job-is ft">Full time</span>
                                <span class="fav-job"
                                  ><i class="la la-heart-o"></i
                                ></span>
                                <i>5 months ago</i>
                              </div>
                            </div>
                            <!-- Job -->
                            <div class="job-listing wtabs">
                              <div class="job-title-sec">
                                <div class="c-logo">
                                  <img src="/images/resource/l4.png" alt="" />
                                </div>
                                <h3>
                                  <a href="#" title="">Marketing Dairector</a>
                                </h3>
                                <span>Massimo Artemisis</span>
                              </div>
                              <div class="job-style-bx">
                                <span class="job-is ft">Full time</span>
                                <span class="fav-job"
                                  ><i class="la la-heart-o"></i
                                ></span>
                                <i>5 months ago</i>
                              </div>
                            </div>
                            <!-- Job -->
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
                            <span>{{internship.duration}}</span>
                          </li>
                          <li v-if="internship.is_paid === 1">
                            <i class="la la-money"></i>
                            <h3>Offerd Salary</h3>
                            <span>£15,000 - £20,000</span>
                          </li>
                          <li>
                            <i class="la la-line-chart"></i>
                            <h3>Qualification</h3>
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
                      <div class="quick-form-job">
                        <h3>Contact</h3>
                        <form>
                          <input type="text" placeholder="Enter your Name *" />
                          <input type="text" placeholder="Email Address*" />
                          <input type="text" placeholder="Phone Number" />
                          <textarea
                            placeholder="Message should have more than 50 characters"
                          ></textarea>
                          <button class="submit">Send Email</button>
                          <span
                            >You accepts our
                            <a href="#" title="">Terms and Conditions</a></span
                          >
                        </form>
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
import { mapGetters, mapActions } from "vuex";
import InternshipTab from '../../components/InternshipTab.vue';

export default {
  name: "InternshipDetail",
  components: {},
  props: ['url'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["internship", "isLoading"]),
  },
  methods: {
    ...mapActions(["fetchDetailInternship"]),
  },
  created() {
    this.fetchDetailInternship(this.url);
  },
};
</script>

<style>
</style>