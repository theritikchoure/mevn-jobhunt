<template>
  <div class="tree_widget-sec">
    <ul>
      <li>
        <router-link :to="{ name: 'StudentDashboard' }">
          <i class="la la-briefcase"></i>Dashboard
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-file-text"></i>My Profile
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-money"></i>Shorlisted Job
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-paper-plane"></i>Applied Job
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-user"></i>Job Alerts
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-file-text"></i>Cv & Cover Letter
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-flash"></i>Change Password
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="la la-unlink"></i>Logout
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StudentSidebar",
};
</script>

<style>
</style>