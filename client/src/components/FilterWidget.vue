<template>
  <aside class="col-lg-3 column">
    <div class="widget border">
      <h3 class="sb-title open" @click="togglePostedWidget">Date Posted</h3>
      <div class="posted_widget" v-show="postedWidget">
        <input type="radio" name="choose" id="232" /><label for="232"
          >Last Hour</label
        ><br />
        <input type="radio" name="choose" id="wwqe" /><label for="wwqe"
          >Last 24 hours</label
        ><br />
        <input type="radio" name="choose" id="erewr" /><label for="erewr"
          >Last 7 days</label
        ><br />
        <input type="radio" name="choose" id="qwe" /><label for="qwe"
          >Last 14 days</label
        ><br />
        <input type="radio" name="choose" id="wqe" /><label for="wqe"
          >Last 30 days</label
        ><br />
        <input type="radio" name="choose" id="qweqw" /><label
          class="nm"
          for="qweqw"
          >All</label
        ><br />
      </div>
    </div>
    <div class="widget border">
      <h3 class="sb-title open" @click="toggleSalaryWidget">Offerd Salary</h3>
      <div class="specialism_widget" v-show="salaryWidget">
        <div class="simple-checkbox">
          <p>
            <input type="checkbox" name="smplechk" id="1" /><label for="1"
              >10k - 20k</label
            >
          </p>
          <p>
            <input type="checkbox" name="smplechk" id="2" /><label for="2"
              >20k - 30k</label
            >
          </p>
          <p>
            <input type="checkbox" name="smplechk" id="3" /><label for="3"
              >30k - 40k</label
            >
          </p>
          <p>
            <input type="checkbox" name="smplechk" id="4" /><label for="4"
              >40k - 50k</label
            >
          </p>
        </div>
      </div>
    </div>
    <div class="widget border">
      <h3 class="sb-title open" @click="toggleQualificationWidget">Qualification</h3>
      <div class="specialism_widget" v-show="qualificationWidget">
        <div class="simple-checkbox">
          <p>
            <input type="checkbox" name="smplechk" id="19" /><label for="19"
              >Matriculation</label
            >
          </p>
          <p>
            <input type="checkbox" name="smplechk" id="20" /><label for="20"
              >Intermidiate</label
            >
          </p>
          <p>
            <input type="checkbox" name="smplechk" id="21" /><label for="21"
              >Gradute</label
            >
          </p>
        </div>
      </div>
    </div>
    <div class="banner_widget">
      <a href="#" title=""><img src="images/resource/banner.png" alt="" /></a>
    </div>
  </aside>
</template>

<script>
export default {
  name: "FilterWidget",
  data() {
    return {
      postedWidget: true,
      salaryWidget: false,
      qualificationWidget: false,
    };
  },
  methods: {
    togglePostedWidget() {
      this.postedWidget = !this.postedWidget;
    },

    toggleSalaryWidget() {
      this.salaryWidget = !this.salaryWidget;
    },
    
    toggleQualificationWidget() {
      this.qualificationWidget = !this.qualificationWidget;
    },
  },
};
</script>

<style>
</style>