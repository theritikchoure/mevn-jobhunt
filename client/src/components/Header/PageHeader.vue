<template>
  <header class="white">
    <div class="menu-sec">
      <div class="container">
        <div class="logo">
          <a href="index.html" title=""
            ><img src="images/resource/logo10.png" alt=""
          /></a>
        </div>
        <!-- Logo -->
        <nav>
          <ul>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'Index' }">
                <a href="#" title="">Home </a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'AboutUs' }">
                <a href="#" title="">About Us </a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'HowItWorks' }">
                <a href="#" title="">How It Works</a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'FAQ' }">
                <a href="#" title="">FAQs </a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link :to="{ name: 'ContactUs' }">
                <a href="#" title="">Contact Us </a>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- Menus -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style>
</style>