<template>
  <div>
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
                <h3>Welcome Tera Planer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="block no-padding">
        <div class="container">
          <div class="row no-gape">
            <aside class="col-lg-3 column border-right">
              <div class="widget">
                <div class="tree_widget-sec">
                  <EmployerSidebar />
                </div>
              </div>
            </aside>
            <div class="col-lg-9 column">
              <div class="padding-left">
                <div class="profile-title">
                  <h3>Post a New Job</h3>
                </div>
                <div class="profile-form-edit">
                  <form @submit.prevent="onSubmit">
                    <div class="row">
                      <div class="col-lg-12">
                        <span class="pf-title">Job Title</span>
                        <div class="pf-field">
                          <input
                            type="text"
                            placeholder="Designer"
                            v-model="title"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <span class="pf-title">Description</span>
                        <div class="pf-field">
                          <textarea v-model="description"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <span class="pf-title">Categories</span>
                        <div class="pf-field">
                          <select
                            data-placeholder="Please Select Specialism"
                            class="chosen"
                            v-model="category"
                          >
                            <option disabled value="">Select Category</option>
                            <option>Web Development</option>
                            <option>Web Designing</option>
                            <option>Art & Culture</option>
                            <option>Reading & Writing</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <span class="pf-title">Is Internship is Paid?</span>
                        <div class="simple-checkbox">
                          <p>
                            <input
                              type="checkbox"
                              name="smplechk"
                              id="isPaid"
                              v-model="is_paid"
                              :true-value="1"
                              :false-value="0"
                              @click="salaryFieldDisable = !salaryFieldDisable"
                            />
                            <label for="isPaid">10k - 20k</label>
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <span class="pf-title">Offerd Salary</span>
                        <div class="pf-field">
                          <select
                            data-placeholder="Please Select Specialism"
                            class="chosen"
                            :disabled="salaryFieldDisable"
                            v-model="salary"
                          >
                            <option disabled value="">
                              Select Salary Range
                            </option>
                            <option>10k - 20k</option>
                            <option>20k - 30k</option>
                            <option>30k - 40k</option>
                            <option>40k - 50k</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <span class="pf-title">Qualification</span>
                        <div class="pf-field">
                          <select
                            data-placeholder="Please Select Qualification"
                            class="chosen"
                            v-model="qualification"
                          >
                            <option disabled value="">
                              Select Qualification
                            </option>
                            <option>Undergraduate</option>
                            <option>Graduate</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <span class="pf-title">Number of Openings</span>
                        <div class="pf-field">
                          <input
                            type="number"
                            min="1"
                            placeholder="1"
                            v-model="no_of_openings"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <span class="pf-title">Duration (in months)</span>
                        <div class="pf-field">
                          <input
                            type="number"
                            min="1"
                            max="12"
                            placeholder="1"
                            v-model="duration"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <span class="pf-title">Application Deadline Date</span>
                        <div class="pf-field">
                          <input
                            type="date"
                            placeholder="01.11.207"
                            class="form-control datepicker"
                            v-model="last_date"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit">Add Internship</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EmployerSidebar from "../../components/EmployerSidebar.vue";
import InternshipValidation from "../../validations/internship.validation";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EmployerPostNewJob",
  components: { EmployerSidebar },
  data() {
    return {
      title: "",
      description: "",
      category: "",
      is_paid: 0,
      salary: "",
      qualification: "",
      no_of_openings: 1,
      duration: 1,
      last_date: Date,
      status: 1,

      salaryFieldDisable: true,
      error: false,
      errorMsg: "",
      successMsg: "",
      errors: {},
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["storeInternship"]),

    async onSubmit() {
      console.log( this.title, this.description, this.category, this.is_paid, this.salary, 
      this.qualification, this.no_of_openings, this.duration, this.last_date );
      
      const object = {
        title: this.title, description: this.description, category: this.category,
        is_paid: this.is_paid, salary: this.salary, qualification: this.qualification,
        no_of_openings: this.no_of_openings, duration: this.duration, last_date: this.last_date,
        status: this.status
      };

      const errors = InternshipValidation.validate(object);
      if(Object.entries(errors).length !== 0) {
        this.error = true;
        this.errors = errors;
        console.log(errors); 
        return;
      } else {
        this.errors = {};
      }

      await this.storeInternship(object);
      this.resetInput();
    },

    resetInput() {
      this.title = "";
      this.description = "";
      this.category = "";
      this.is_paid = 0;
      this.salary = "";
      this.qualification = "";
      this.no_of_openings = 1;
      this.duration = 1;
      this.last_date = Date;
      this.status = 1;

      this.salaryFieldDisable = true;
      this.error = false;
      this.errorMsg = "";
      this.successMsg = "";
      this.errors = {};
    },

  },
};
</script>

<style>
</style>