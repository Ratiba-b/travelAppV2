<template>
  <div>
    <AdminNav />
    <NotifBar />
    <router-view />
  </div>
</template>
<script>
import AdminNav from "@/components/AdminNav.vue";
import NotifBar from "@/components/NotifBar.vue";

export default {
  name: "LoggedIn Layout",
  components: {
    AdminNav,
    NotifBar,
  },
};
</script>
