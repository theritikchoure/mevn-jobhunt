<template>
  <footer>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 column">
            <div class="widget">
              <div class="about_widget">
                <div class="logo">
                  <a href="index.html" title="">
                    <img src="images/resource/logo.png" alt="" />
                  </a>
                </div>
                <span>Collin Street West, Victor 8007, Australia. </span>
                <span>+1 246-345-0695 </span>
                <span>info@jobhunt.com </span>
                <div class="social">
                  <a href="#" title="">
                    <i class="la la-facebook"> </i>
                  </a>
                  <a href="#" title="">
                    <i class="la la-twitter"> </i>
                  </a>
                  <a href="#" title="">
                    <i class="la la-linkedin"> </i>
                  </a>
                  <a href="#" title="">
                    <i class="la la-pinterest"> </i>
                  </a>
                  <a href="#" title="">
                    <i class="la la-behance"> </i>
                  </a>
                </div>
              </div>
              <!-- About Widget -->
            </div>
          </div>
          <div class="col-lg-4 column">
            <div class="widget">
              <h3 class="footer-title">Frequently Asked Questions</h3>
              <div class="link_widgets">
                <div class="row">
                  <div class="col-lg-6">
                    <a href="#" title="">Privacy & Seurty </a>
                    <a href="#" title="">Terms of Serice </a>
                    <a href="#" title="">Communications </a>
                    <a href="#" title="">Referral Terms </a>
                    <a href="#" title="">Lending Licnses </a>
                    <a href="#" title="">Disclaimers </a>
                  </div>
                  <div class="col-lg-6">
                    <a href="#" title="">Support </a>
                    <a href="#" title="">How It Works </a>
                    <a href="#" title="">For Employers </a>
                    <a href="#" title="">Underwriting </a>
                    <a href="#" title="">Contact Us </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 column">
            <div class="widget">
              <h3 class="footer-title">Quick Links</h3>
              <div class="link_widgets">
                <div class="row">
                  <div class="col-lg-12">
                    <router-link :to="{name: 'Home'}">Home </router-link>
                    <router-link :to="{name: 'AboutUs'}">About Us </router-link>
                    <router-link :to="{name: 'ContactUs'}">Contact Us </router-link>
                    <router-link :to="{name: 'HowItWorks'}">How It Works</router-link>
                    <router-link :to="{name: 'TAndC'}">Terms and Conditions</router-link>
                    <router-link :to="{name: 'FAQ'}">FAQs</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 column">
            <div class="widget">
              <div class="download_widget">
                <a href="#" title="">
                  <img src="/images/resource/dw1.png" alt="" />
                </a>
                <a href="#" title="">
                  <img src="/images/resource/dw2.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-line">
      <span
        >© 2022 Jobhunt All rights reserved. Design by Creative Layers
      </span>
      <a href="#scrollup" class="scrollup" title="">
        <i class="la la-arrow-up"> </i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
