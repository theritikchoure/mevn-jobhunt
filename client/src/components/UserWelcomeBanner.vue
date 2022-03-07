<template>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StudentWelcomeBanner",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
</style>