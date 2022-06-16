<template>
  <div class="tree_widget-sec">
    <ul>
      <li>
        <router-link :to="{ name: 'EmployerDashboard' }">
          <i class="la la-briefcase"></i>Dashboard
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CreateInternship' }">
          <i class="la la-paper-plane"></i>Create Internship
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Home' }">
          <i class="la la-file-text"></i>My Profile
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Home' }">
          <i class="la la-flash"></i>Change Password
        </router-link>
      </li>
      <li>
        <a @click="logout">
          <i class="la la-unlink"></i>Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import AuthService from '../../services/auth.service';
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