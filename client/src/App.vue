<template>
  <div>
    <Loader v-if="showLoader" @loader="loader"/>
    <div class="theme-layout" id="scrollup">
      <Header v-if="!headerDisabled" />
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header/Header.vue';
import Loader from './components/Loader/Loader.vue';

export default {
  name: 'app',
  components: {
    Footer, Header, Loader,
  },
  data() {
    return {
      headerDisabled: null,
      showLoader: true,
    };
  },
  created() {
    this.checkRoute();
    this.loader();
  },
  methods: {
    checkRoute() {
      if(
        this.$route.name === "AboutUs" ||
        this.$route.name === "ContactUs" ||
        this.$route.name === "FAQ" ||
        this.$route.name === "HowItWorks" ||
        this.$route.name === "TAndC" 
      ) {
        this.headerDisabled = true;
        return;
      } this.headerDisabled = false;
    },

    loader() {
      setTimeout(() => {
        this.showLoader = !this.showLoader;
      }, 3000);
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  },
};
</script>
