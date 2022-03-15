<template>
  <div class="block no-padding gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner2">
            <div class="inner-title2">
              <h3>{{link.name}}</h3>
              <span>Keep up to date with the latest news</span>
            </div>
            <div class="page-breacrumbs">
              <ul class="breadcrumbs">
                <li><a href="#" title="">Home</a></li>
                <li><a href="#" title="">{{link.name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBreadcrumb",
  props: ["link"],
  computed: {
  }
};
</script>

<style>
</style>