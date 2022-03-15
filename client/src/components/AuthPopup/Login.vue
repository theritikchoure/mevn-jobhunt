<template>
  <div class="account-popup-area signin-popup-box" v-if="!loggedInSuccess">
    <div class="account-popup">
      <span class="close-popup" @click='closePopup'><i class="la la-close"></i></span>
      <h3>User Login</h3>
      <span></span>
      <div class="select-user">
        <span @click="userType('student')"
         id="login-student" :class="{ active: studentButtonActive }"
        >Student</span>
        <span @click="userType('employer')" 
         id="login-employer" :class="{ active: employerButtonActive }"
        >Employer</span>
      </div>
      <div v-if="!isAuthLoading" class="error-message">
        {{authErrorMsg}}
      </div>
      <form>
        <div class="cfield">
          <input type="text" placeholder="Email" id="login-email" v-model="email" name="email"/>
          <i class="la la-envelope"></i>
        </div>
        <div class="cfield">
          <input
            type="password"
            placeholder="********"
            id="login-password"
            v-model="password"
            name="password"
          />
          <i class="la la-key"></i>
        </div>
        <a href="#" title="">Forgot Password?</a>
        <button @click.prevent="login" id="login-submit" type="submit">Login</button>
      </form>
      <div class="extra-login">
        <span>Or</span>
        <div class="login-social">
          <a class="fb-login" href="#" title=""
            ><i class="la la-facebook"></i
          ></a>
          <a class="tw-login" href="#" title=""
            ><i class="la la-twitter"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'LoginPopup',
  data() {
    return {
      email: '',
      password: '',
      user_type: '',

      loggedInSuccess: false,

      studentButtonActive: false,
      employerButtonActive: false,
    };
  },
  computed: { ...mapGetters(["isAuthLoading", "authSuccessMsg", "authErrorMsg"]) },
  methods: {
    ...mapActions(["userLogin"]),

    closePopup() {
      this.$emit("loginPopup")
    },

    userType(type) {
      this.user_type = type;
      this.studentButtonActive = type == "student" ? true : false;
      this.employerButtonActive = type == "employer" ? true : false;
    },

    async login() {
      this.loading = true;
      console.log(this.email, this.password, this.user_type, this.remember_me);
      const user = {
        email: this.email,
        password: this.password,
        user_type: this.user_type,
        remember_me: this.remember_me,
      };

      const response = await this.userLogin(user);
      if(response) this.closePopup();
    },
  },
};
</script>

<style>
.error-message {
  margin-top: 125px!important;
  margin-bottom: -10px;
  font-family: 'Open Sans';
  font-size: 13px;
  color: #ff000e;
}
</style>