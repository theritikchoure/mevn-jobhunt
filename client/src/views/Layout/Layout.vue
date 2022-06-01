<template>
  <div>
        <Header />
        <slot name="section" />
        <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Index.vue';
import Footer from '@/components/Footer/Index.vue';
import 'mosha-vue-toastify/dist/style.css'
export default {
  components: { Header, Footer },
}
</script>

<style>

</style>