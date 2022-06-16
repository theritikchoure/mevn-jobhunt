<template>
  <div class="guideline-messages" id="guideline-messages">
    <h4>Important Guidelines</h4>
    <ul>
      <li>
        a. Please do not post
    </li>
        <ul>
          <li>
            1. Internships where candidates need to pay registration fee or
            security deposit
          </li>
          <li>2. an unpaid internship (except if you are an NGO)</li>
          <li>3. Network Level Marketing (NLM) internships</li>
          <li>
            4. internships where students are expected to consume
            alcohol/tobacco
          </li>
        </ul>


      <li>
        b. Please mention correct stipend &amp; perks that you will be providing
        to the interns
      </li>
      <li>
        c. Please ensure that profile name matches the job description provided
        by you
      </li>
      <li>
        d. Please issue an offer-letter mentioning all the specific details such
        as stipend, duration, perks &amp; important dates as advertised on
        jobhunt.
      </li>
    </ul>

    <input type="checkbox" id="agree_on_guidelines" name="agree_on_guidelines" v-model="checkbox">
    <label for="agree_on_guidelines" :class="[ checkbox ? 'green-message' : 'red-message' ]">I agree to the guidelines mentioned above</label><br>

    <button type="submit" id="agree_on_guidelines_btn" @click="next">Next</button>

  </div>
</template>

<script>
import { notifyWarning } from '../../utils/notify';
export default {
  name: "Guidelines",
  data() {
    return {
        checkbox: false,
    };
  },
  setup () {
    const warningMsg = (msg) => {
        notifyWarning(msg);
    }
    return { warningMsg }
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    next() {
        if(this.checkbox) {
            this.$emit("toggleSection")
        } else {
            this.warningMsg('Please accept guidelines');
        }
    }
  },
  created() {},
};
</script>

<style scoped>
#guideline-messages {
    padding-left: 40px;
    font-family: 'Open Sans';
    font-size: 14px;
    color: #202020;
}

#guideline-messages h4 {
    font-size: 18px;
    margin-bottom: 3%;
}

#guideline-messages > ul > li:nth-child(1) {
    margin-bottom: 3%;
}

#guideline-messages > ul > ul {
    margin-left: 3%;
    margin-bottom: 4%;
}

#agree_on_guidelines_btn { 
    float: right;
    background: #ffffff;
    border: 2px solid #fb236a;
    color: #202020;
    font-family: Open Sans;
    font-size: 15px;
    padding: 11px 40px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 5%;
}

#agree_on_guidelines_btn:hover {
    background: #fb236a;
    color: #ffffff;
}

.green-message {
    color: green;
}

.red-message {
    color: red;
}
</style>
