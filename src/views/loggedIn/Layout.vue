<template>
  <div>
    <AdminNav />
    <router-view />
  </div>
</template>
<script>
import AdminNav from "@/components/AdminNav.vue";
export default {
  name: "LoggedIn Layout",
  components: {
    AdminNav,
  },
};
</script>
