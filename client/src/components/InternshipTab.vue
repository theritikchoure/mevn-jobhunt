<template>
  <div class="job-listing wtabs">
    <div class="job-title-sec">
      <div class="c-logo">
        <img src="images/resource/l5.png" alt="" />
      </div>
      <h3>
        <router-link :to="{ name: 'InternshipDetail', params: { url: internship.url }}">
          {{internship.title}}
        </router-link>
      </h3>
      <span>{{internship.employer.name}}</span>
    </div>
    <div class="job-style-bx">
      <router-link :to="{ name: 'InternshipDetail', params: { url: internship.url }}">
        <span class="job-is pt">Apply Now</span>
      </router-link>
      <span class="fav-job"><i class="la la-heart-o"></i></span>
      <i>{{internship.created_at}}</i>
    </div>
  </div>
</template>

<script>

export default {
  name: "InternshipTab",
  props: ['internship'],
};
</script>

<style scoped>
.job-is.pt {
  color: #8b91dd;
  border-color: #8b91dd;
}

.job-is.pt:hover {
  color: #fff;
  border-color: #8b91dd;
  background-color: #8b91dd;
}

</style>