<template>
  <div class="account-popup-area signin-popup-box" v-if="!loggedInSuccess">
    <div class="account-popup">
      <span class="close-popup"><i class="la la-close"></i></span>
      <h3>User Login</h3>
      <span></span>
      <div class="select-user">
        <span @click="userType('student')">Student</span>
        <span @click="userType('employer')">Employer</span>
      </div>
      <div v-if="error" class="error-message">
        {{this.message}}
      </div>
      <form>
        <div class="cfield">
          <input type="text" placeholder="Email" id="email" v-model="email" name="email"/>
          <i class="la la-envelope"></i>
        </div>
        <div class="cfield">
          <input
            type="password"
            placeholder="********"
            id="password"
            v-model="password"
            name="password"
          />
          <i class="la la-key"></i>
        </div>
        <a href="#" title="">Forgot Password?</a>
        <button @click.prevent="login" type="submit">Login</button>
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
// import Axios from 'axios';
// import * as yup from 'yup';

export default {
  name: 'LoginPopup',
  data() {
    return {
      email: '',
      password: '',
      user_type: '',
      remember_me: false,
      loading: false,
      message: '',
      error: false,
      loggedInSuccess: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      // this.$router.push('/');
    }
  },
  methods: {
    userType(type) {
      this.user_type = type;
    },
    login() {
      this.loading = true;
      console.log(this.email, this.password, this.user_type, this.remember_me);

      if(!this.email || !this.password) {
        this.error = true;
        this.message = "Please Fill All The Details";
        return;
      }

      if(this.user_type === '') {
        this.error = true;
        this.message = "Please Select Who Are You Student or Employer";
        return;
      }

      const user = {
        email: this.email,
        password: this.password,
        user_type: this.user_type,
        remember_me: this.remember_me,
      };
      
      this.$store.dispatch('auth/login', user).then(
        () => {
          if(this.user_type == 'student') {
            this.$router.push('/student-dashboard');
          }
          // this.loggedInSuccess = true;
          // window.location.reload();
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.error = true;
          this.message = (error.response
              && error.response.data
              && error.response.data.message)
            || error.message
            || error.toString();
        },
      );
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