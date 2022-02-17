<template>
  <ul>
    <li>
      <router-link :to="{ name: 'EmployerDashboard' }">
        <i class="la la-briefcase"></i>Dashboard
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'EmployerProfile' }">
        <i class="la la-file-text"></i>Company Profile
      </router-link>
    </li>
    <li>
      <a href="employer_transactions.html" title=""
        ><i class="la la-money"></i>Transactions</a
      >
    </li>
    <li>
      <a href="employer_resume.html" title=""
        ><i class="la la-paper-plane"></i>Resumes</a
      >
    </li>
    <li>
      <a href="employer_packages.html" title=""
        ><i class="la la-user"></i>Packages</a
      >
    </li>
    <li>
      <router-link :to="{ name: 'EmployerPostNewJob' }">
        <i class="la la-file-text"></i>Post a New Job
      </router-link>
    </li>
    <li>
      <a href="employer_job_alert.html" title=""
        ><i class="la la-flash"></i>Job Alerts</a
      >
    </li>
    <li>
      <router-link :to="{ name: 'EmployerChangePassword' }">
        <i class="la la-lock"></i>Change Password
      </router-link>
    </li>
    <li>
      <a @click="logout"><i class="la la-unlink"></i>Logout</a>
    </li>
  </ul>
</template>

<script>
import AuthService from '../services/auth.service';
export default {
  name: "EmployerSidebar",
  methods: {
    logout() {
      AuthService.logout();
      window.location.reload();
    }
  }
};
</script>

<style>
</style>