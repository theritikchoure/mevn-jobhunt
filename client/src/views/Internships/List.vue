<template>
  <layout>
    <template v-slot:section>
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
                      <h4>
                        Explore Thousand Of Jobs With Just Simple Search...
                      </h4>
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
              <FilterWidget />
              <div class="col-lg-9 column">
                <div class="modrn-joblist np">
                  <div class="filterbar">
                    <span class="emlthis"
                      ><a href="mailto:example.com" title=""
                        ><i class="la la-envelope-o"></i> Email me Jobs Like
                        These</a
                      ></span
                    >
                    <h5>{{ internships.length }} Internships</h5>
                  </div>
                </div>
                <!-- MOdern Job LIst -->
                <div class="job-list-modern" >
                  <!-- Tab Component -->
                    <InternshipTab v-for="item in internships" :key="item.id" :item="item" />

                  <div class="pagination">
                    <ul>
                      <li class="prev">
                        <a href=""
                          ><i class="la la-long-arrow-left"></i> Prev</a
                        >
                      </li>
                      <li><a href="">1</a></li>
                      <li class="active"><a href="">2</a></li>
                      <li><a href="">3</a></li>
                      <li><span class="delimeter">...</span></li>
                      <li><a href="">14</a></li>
                      <li class="next">
                        <a href=""
                          >Next <i class="la la-long-arrow-right"></i
                        ></a>
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
    </template>
  </layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Layout from "../Layout/Layout.vue";
import InternshipTab from "../../components/Internship/Tab.vue";

export default {
  name: "InternshipList",
  components: { Layout, InternshipTab },
  computed: { 
      ...mapGetters(["internships"]),
  },
  mounted() {
      // this.fetchAllInternships();
       console.log(this.internships)
  },
  methods: {
      ...mapActions(["fetchAllInternships"]),
  },
  created() {
      this.fetchAllInternships();
  }
};
</script>

<style></style>
