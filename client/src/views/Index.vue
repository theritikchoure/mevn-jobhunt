<template>
  <div>
    <HeroSection />
    <PopularCategories />
    <MakeADifferenceSection />
    <!-- <FeaturedJobs /> -->
    <BrandLogos />
    <Testimonials />
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
  },
  methods: {
    
  }
};
</script>

<style></style>
