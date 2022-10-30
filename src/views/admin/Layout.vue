<template>
  <!-- <adminNav /> -->

  <Dashboard />

  <router-view />
</template>

<script>
// import AdminHeader from "@/components/AdminHeader.vue";
// import AdminNav from "@/components/AdminNav.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "AdminLayout",
  components: {
    // AdminHeader,
    // AdminNav,
    Dashboard,
  },
};
</script>

<style></style>
