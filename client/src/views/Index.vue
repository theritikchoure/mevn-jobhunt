<template>
  <div>
    <HeroSection />
    <PopularCategories />
    <MakeADifferenceSection />
    <FeaturedJobs />
    <Testimonials />
    <BrandLogos />
    <section>
      <div class="block">
        <div
          data-velocity="-.1"
          style="
            background: url(images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent;
          "
          class="parallax scrolly-invisible no-parallax"
        ></div>
        <!-- PARALLAX BACKGROUND IMAGE -->
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading">
                <h2>Quick Career Tips</h2>
                <span
                  >Found by employers communicate directly with hiring managers and recruiters.
                </span>
              </div>
              <!-- Heading -->
              <div class="blog-sec">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="my-blog">
                      <div class="blog-thumb">
                        <a href="#" title="">
                          <img src="images/resource/b1.jpg" alt="" />
                        </a>
                        <div class="blog-metas">
                          <a href="#" title="">March 29, 2017 </a>
                          <a href="#" title="">0 Comments </a>
                        </div>
                      </div>
                      <div class="blog-details">
                        <h3>
                          <a href="#" title="">Attract More Attention Sales And Profits </a>
                        </h3>
                        <p>
                          A job is a regular activity performed in exchange becoming an employee,
                          volunteering,
                        </p>
                        <a href="#" title=""
                          >Read More
                          <i class="la la-long-arrow-right"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="my-blog">
                      <div class="blog-thumb">
                        <a href="#" title="">
                          <img src="images/resource/b2.jpg" alt="" />
                        </a>
                        <div class="blog-metas">
                          <a href="#" title="">March 29, 2017 </a>
                          <a href="#" title="">0 Comments </a>
                        </div>
                      </div>
                      <div class="blog-details">
                        <h3>
                          <a href="#" title="">11 Tips to Help You Get New Clients </a>
                        </h3>
                        <p>
                          A job is a regular activity performed in exchange becoming an employee,
                          volunteering,
                        </p>
                        <a href="#" title=""
                          >Read More
                          <i class="la la-long-arrow-right"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="my-blog">
                      <div class="blog-thumb">
                        <a href="#" title="">
                          <img src="images/resource/b3.jpg" alt="" />
                        </a>
                        <div class="blog-metas">
                          <a href="#" title="">March 29, 2017 </a>
                          <a href="#" title="">0 Comments </a>
                        </div>
                      </div>
                      <div class="blog-details">
                        <h3>
                          <a href="#" title="">An Overworked Newspaper Editor </a>
                        </h3>
                        <p>
                          A job is a regular activity performed in exchange becoming an employee,
                          volunteering,
                        </p>
                        <a href="#" title=""
                          >Read More
                          <i class="la la-long-arrow-right"> </i>
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
    </section>
    <section>
      <div class="block no-padding">
        <div class="container fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="simple-text">
                <h3>Gat a question?</h3>
                <span
                  >We're here to help. Check out our FAQs, send us an email or call us at 1 (800)
                  555-5555
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '../components/MultipleSections/HeroSection.vue';
import PopularCategories from '../components/MultipleSections/PopularCategories.vue';
import MakeADifferenceSection from '../components/MultipleSections/MakeADifferenceSection.vue';
import FeaturedJobs from '../components/MultipleSections/FeaturedJobs.vue';
import Testimonials from '../components/MultipleSections/Testimonials.vue';
import BrandLogos from '../components/MultipleSections/BrandLogos.vue';

export default {
  name: 'Index',
  components: {
    HeroSection, PopularCategories, MakeADifferenceSection, FeaturedJobs, Testimonials, BrandLogos,
  },
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
  }
};
</script>

<style></style>
