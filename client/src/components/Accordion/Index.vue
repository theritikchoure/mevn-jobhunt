<template>
  <div class="faq-box">
    <h2 @click="toggleAccordion()" :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`">
        <slot name="title" /> <i class="la la-minus"></i>
    </h2>
        
    <div class="contentbox" v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
