<template>
  <form>
    <div class="row">
      <div class="col-lg-12">
        <span class="pf-title">Internship Title</span>
        <div class="pf-field">
          <input type="text" v-model="formData.title"/>
        </div>
      </div>
      <div class="col-lg-12">
        <span class="pf-title">Select Profile</span>
        <div class="pf-field">
          <div class="row">
            <div class="col-lg-6">
              <input
                type="radio"
                name="choose"
                id="232"
                v-model="formData.category"
                value="a"
              /><label for="232">Last Hour</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="choose"
                id="wwqe"
                v-model="formData.category"
                value="b"
              /><label for="wwqe">Last 24 hours</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="choose"
                id="erewr"
                v-model="formData.category"
                value="c"
              /><label for="erewr">Last 7 days</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="choose"
                id="qwe"
                v-model="formData.category"
                value="d"
              /><label for="qwe">Last 14 days</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="choose"
                id="wqe"
                v-model="formData.category"
                value="e"
              /><label for="wqe">Last 30 days</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="choose"
                id="qweqw"
                v-model="formData.category"
                value="f"
              /><label class="nm" for="qweqw">All</label><br />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <span class="pf-title">Internship Type</span>
        <div class="pf-field">
          <div class="row">
            <div class="col-lg-6">
              <input
                type="radio"
                name="internship_type"
                id="office-type"
                v-model="formData.type"
                value="office"
              /><label for="office-type">In Office</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="internship_type"
                id="wfh-type"
                v-model="formData.type"
                value="wfh"
              /><label for="wfh-type">Work From Home</label><br />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <span class="pf-title">Part Time / Full Time</span>
        <div class="pf-field">
          <div class="row">
            <div class="col-lg-6">
              <input
                type="radio"
                name="internship_time"
                id="full-time"
                v-model="formData.time"
                value="full"
              /><label for="full-time">Full Time</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="internship_time"
                id="part-time"
                v-model="formData.time"
                value="part"
              /><label for="part-time">Part Time</label><br />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <span class="pf-title">No. of Openings</span>
        <div class="pf-field">
          <input type="number" min="1" v-model="formData.no_of_openings" />
        </div>
      </div>
      <div class="col-lg-6">
        <span class="pf-title">Duration (in months)</span>
        <div class="pf-field">
          <input type="number" min="1" max="7"  v-model="formData.duration"/>
        </div>
      </div>
      <div class="col-lg-12">
        <span class="pf-title">Internship Joining</span>
        <div class="pf-field">
          <div class="row">
            <div class="col-lg-6">
              <input
                type="radio"
                name="internship_joining"
                id="immediate"
                v-model="formData.joining"
                value="immediate"
              /><label for="immediate">Immediate</label><br />
            </div>
            <div class="col-lg-6">
              <input
                type="radio"
                name="internship_joining"
                id="later"
                v-model="formData.joining"
                value="later"
              /><label for="later">Later</label><br />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <span class="pf-title">Minimum Qualification</span>
        <div class="pf-field">
          <select data-placeholder="Please Select Specialism" class="chosen" v-model="formData.qualification">
            <option>Please Select Minimum Qualification</option>
            <option>Diploma</option>
            <option>Bsc</option>
            <option>B. Tech</option>
          </select>
        </div>
      </div>

      <div class="col-lg-6">
        <span class="pf-title">Application Last Date</span>
        <div class="pf-field">
          <input type="Date" v-model="formData.last_date"/>
        </div>
      </div>

      <div class="col-lg-12">
        <span class="pf-title">Stipend</span>
        <div class="pf-field">
          <div class="row">
            <div class="col-lg-4">
              <input
                type="radio"
                name="internship_stipend"
                id="fixed"
                v-model="formData.stipend"
                value="fixed"
              /><label for="fixed">Fixed</label><br />
            </div>
            <div class="col-lg-4">
              <input
                type="radio"
                name="internship_stipend"
                id="negotiable"
                v-model="formData.stipend"
                value="negotiable"
              /><label for="negotiable">Negotiable</label><br />
            </div>
            <div class="col-lg-4">
              <input
                type="radio"
                name="internship_stipend"
                id="unpaid"
                v-model="formData.stipend"
                value="unpaid"
              /><label for="unpaid">Unpaid</label><br />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-if="formData.stipend === 'fixed'">
        <span class="pf-title">Salary (per month)</span>
        <div class="pf-field">
          <select data-placeholder="Please Select Specialism" class="chosen" v-model="formData.salary">
            <option>Please Select Salary Range</option>
            <option value="10k - 20k">10k - 20k</option>
            <option value="20k - 30k">20k - 30k</option>
            <option value="30k - 40k">30k - 40k</option>
            <option value="40k - 50k">40k - 50k</option>
            <option value="50k+">50k+</option>
          </select>
        </div>
      </div>
      <div class="col-lg-12" v-if="formData.stipend === 'negotiable'">
        <span class="pf-title">Starting Salary (per month)</span>
        <div class="pf-field">
          <select data-placeholder="Please Select Specialism" class="chosen" v-model="formData.salary">
            <option>Please Select Salary Range</option>
            <option value="10k - 20k">10k - 20k</option>
            <option value="20k - 30k">20k - 30k</option>
            <option value="30k - 40k">30k - 40k</option>
            <option value="40k - 50k">40k - 50k</option>
            <option value="50k+">50k+</option>
          </select>
        </div>
      </div>


      <div class="col-lg-12">
        <span class="pf-title">Perks</span>
        <div class="pf-field">
          <div class="row perks-options">
            <p class="flchek">
              <input
                type="checkbox"
                name="choosetype"
                v-model="formData.perks"
                id="33r"
                value="Certificate"
              /><label for="33r">Certificate</label>
            </p>
            <p class="flchek">
              <input
                type="checkbox"
                name="choosetype"
                v-model="formData.perks"
                id="dsf"
                value="Flexible Hours"
              /><label for="dsf">Flexible Hours</label>
            </p>
            <p class="flchek">
              <input
                type="checkbox"
                name="choosetype"
                v-model="formData.perks"
                id="sdd"
                value="Letter of Recommendation"
              /><label for="sdd">Letter of Recommendation</label>
            </p>
            <p class="flchek">
              <input
                type="checkbox"
                name="choosetype"
                v-model="formData.perks"
                id="sadd"
                value="5 Days of Working"
              /><label for="sadd">5 Days Working</label>
            </p>
            <p class="flchek">
              <input
                type="checkbox"
                name="choosetype"
                v-model="formData.perks"
                id="assa"
                value="PPO"
              /><label for="assa">PPO</label>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <span class="pf-title">Skill Requirments</span>
        <div class="pf-field">
          <ul class="tags">
            <li class="addedTag">Skills</li>
            <li
              class="addedTag"
              v-for="skill in selectedSkills"
              v-bind:key="skill"
              @click="unSelectSkill(skill)"
            >
              {{ skill }}<span class="tagRemove">x</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row skill-btns-row">
          <span
            class="skill-btns"
            v-for="skill in skills"
            v-bind:key="skill"
            @click="selectSkill(skill)"
            >{{ skill }}</span
          >
        </div>
      </div>

      <div class="col-lg-12">
        <button @click.prevent="submit">Next</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { notifyError, notifySuccess } from "../../utils/notify";

export default {
  name: "InternshipForm",
  data() {
    return {
      formData: {
        description: "internship at jobhunt",
        perks: [],
      },
      skills: [ "html", "css", "javascript", "c++", "node js", "bootstrap", "tailwind", "mocha", "chai", "devops",],
      selectedSkills: [],
    };
  },
  setup() {
    const errorMsg = (msg) => {
      notifyError(msg);
    };
    
    const successMsg = (msg) => {
      notifySuccess(msg);
    };
    return { errorMsg, successMsg };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    ...mapActions(["createInternship"]),

    selectSkill(skill) {
      const index = this.skills.indexOf(skill);
      this.skills.splice(index, 1);

      this.selectedSkills.push(skill);

      console.log(skill);
    },

    unSelectSkill(skill) {
      const index = this.selectedSkills.indexOf(skill);
      this.selectedSkills.splice(index, 1);

      this.skills.push(skill);
    },

    async submit() {
      console.log(this.profile);
      console.log(this.selectedSkills);
      this.formData = {...this.formData, skills: this.selectedSkills}
      const response = await this.createInternship(this.formData);
      console.log(response);
      if(response.data) {
        this.successMsg(response.data.message);
        this.formData = {
          description: "internship at jobhunt",
          perks: [],
        }
        this.selectedSkills = [];
      } else {
        this.errorMsg(response);
      }
    },
  },
  created() {},
};
</script>

<style scoped>

select {
  float: left;
  width: 100%;
  height: 61px;
  padding: 0 15px;
  border: 2px solid #e8ecec;
  font-size: 13px !important;
  color: #888888;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}

.pf-title, label {
  font-size: 14px;
}
.perks-options {
  margin-left: 0.5%;
}

.skill-btns-row {
  margin-left: 0;
}

.skill-btns {
  background: transparent;
  border: 1px solid #fb236a;
  padding: 6px 25px;
  border-radius: 15px;
  color: black;
  font-weight: 400;
  font-size: 13px;
  margin: 6px;
  cursor: pointer;
}

.addedTag {
  cursor: pointer;
}
</style>
