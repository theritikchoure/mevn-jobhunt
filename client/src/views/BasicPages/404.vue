<template>
  <layout>
    <template v-slot:section>
      <section>
        <div class="block no-padding">
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="main-featured-sec witherror">
                  <ul class="main-slider-sec text-arrows">
                    <li><img src="images/resource/mslider3.jpg" alt="" /></li>
                    <li><img src="images/resource/mslider2.jpg" alt="" /></li>
                    <li><img src="images/resource/mslider1.jpg" alt="" /></li>
                  </ul>
                  <div class="error-sec">
                    <img src="images/404.png" alt="" />
                    <span>We Are Sorry, Page Not Found</span>
                    <p>
                      Unfortunately the page you were looking for could not be
                      found. It may be temporarily unavailable, moved or no
                      longer exist. Check the Url you entered for any mistakes
                      and try again.
                    </p>
                    <form>
                      <input
                        type="text"
                        placeholder="Enter any Keyword"
                      /><button type="submit">
                        <i class="la la-search"></i>
                      </button>
                    </form>
                    <h6>
                      <router-link :to="{ name: 'Index' }">
                        Back To Homepage
                      </router-link>
                    </h6>
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
export default {
  name: "404",
  components: { Layout },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style></style>
