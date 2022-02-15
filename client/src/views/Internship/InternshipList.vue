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
              <div class="inner-header wform">
                <div class="job-search-sec">
                  <div class="job-search">
                    <h4>Explore Thousand Of Jobs With Just Simple Search...</h4>
                    <form>
                      <div class="row">
                        <div class="col-lg-9">
                          <div class="job-field">
                            <input
                              type="text"
                              placeholder="Job title, keywords or company name"
                            />
                            <i class="la la-keyboard-o"></i>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <button type="submit">
                            <i class="la la-search"></i>
                          </button>
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

    <section>
      <div class="block remove-top">
        <div class="container">
          <div class="row no-gape">
            <aside class="col-lg-3 column">
              <div class="widget border">
                <h3 class="sb-title open">Date Posted</h3>
                <div class="posted_widget">
                  <input type="radio" name="choose" id="232" /><label for="232"
                    >Last Hour</label
                  ><br />
                  <input type="radio" name="choose" id="wwqe" /><label
                    for="wwqe"
                    >Last 24 hours</label
                  ><br />
                  <input type="radio" name="choose" id="erewr" /><label
                    for="erewr"
                    >Last 7 days</label
                  ><br />
                  <input type="radio" name="choose" id="qwe" /><label for="qwe"
                    >Last 14 days</label
                  ><br />
                  <input type="radio" name="choose" id="wqe" /><label for="wqe"
                    >Last 30 days</label
                  ><br />
                  <input type="radio" name="choose" id="qweqw" /><label
                    class="nm"
                    for="qweqw"
                    >All</label
                  ><br />
                </div>
              </div>
              <div class="widget border">
                <h3 class="sb-title closed">Offerd Salary</h3>
                <div class="specialism_widget">
                  <div class="simple-checkbox">
                    <p>
                      <input type="checkbox" name="smplechk" id="1" /><label
                        for="1"
                        >10k - 20k</label
                      >
                    </p>
                    <p>
                      <input type="checkbox" name="smplechk" id="2" /><label
                        for="2"
                        >20k - 30k</label
                      >
                    </p>
                    <p>
                      <input type="checkbox" name="smplechk" id="3" /><label
                        for="3"
                        >30k - 40k</label
                      >
                    </p>
                    <p>
                      <input type="checkbox" name="smplechk" id="4" /><label
                        for="4"
                        >40k - 50k</label
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="widget border">
                <h3 class="sb-title closed">Qualification</h3>
                <div class="specialism_widget">
                  <div class="simple-checkbox">
                    <p>
                      <input type="checkbox" name="smplechk" id="19" /><label
                        for="19"
                        >Matriculation</label
                      >
                    </p>
                    <p>
                      <input type="checkbox" name="smplechk" id="20" /><label
                        for="20"
                        >Intermidiate</label
                      >
                    </p>
                    <p>
                      <input type="checkbox" name="smplechk" id="21" /><label
                        for="21"
                        >Gradute</label
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="banner_widget">
                <a href="#" title=""
                  ><img src="images/resource/banner.png" alt=""
                /></a>
              </div>
            </aside>
            <div class="col-lg-9 column">
              <div class="modrn-joblist np">
                <div class="filterbar">
                  <span class="emlthis"
                    ><a href="mailto:example.com" title=""
                      ><i class="la la-envelope-o"></i> Email me Jobs Like
                      These</a
                    ></span
                  >
                  <h5>{{internshipList.length}} Internships</h5>
                </div>
              </div>
              <!-- MOdern Job LIst -->
              <div class="job-list-modern">
                <div class="job-listings-sec no-border">
                  <!-- Job -->
                  <div v-for="(item, index) in internshipList" :key="item.id">
                    <InternshipTab :index="index" :internship="item" />
                  </div>
                  <!-- Job -->
                </div>
                <div class="pagination">
                  <ul>
                    <li class="prev">
                      <a href=""><i class="la la-long-arrow-left"></i> Prev</a>
                    </li>
                    <li><a href="">1</a></li>
                    <li class="active"><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><span class="delimeter">...</span></li>
                    <li><a href="">14</a></li>
                    <li class="next">
                      <a href="">Next <i class="la la-long-arrow-right"></i></a>
                    </li>
                  </ul>
                </div>
                <!-- Pagination -->
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
  name: "InternshipList",
  components: { InternshipTab },
  data() {
    return {
    };
  },
  computed: { ...mapGetters(["internshipList", "internshipsPaginatedData", "isLoading"]) },
  methods: {
    ...mapActions(["fetchAllInternships"]),
  },
  created() {
    this.fetchAllInternships();
  },
};
</script>

<style>
</style>