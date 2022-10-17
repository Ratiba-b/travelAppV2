<template>
  <div class="admin">
    <adminHeader />
    <div class="ad_contain">
      <div class="ad_side">
        <adminNav />
      </div>
      <div class="ad_display">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/AdminHeader.vue";
import AdminNav from "@/components/AdminNav.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "AdminLayout",
  components: {
    AdminHeader,
    AdminNav,
  },
};
</script>

<style>
.ad_contain {
  display: flex;
  justify-content: flex-start;
}

.ad_side {
  margin-left: 1rem;
  width: 20%;
  border-right: 1px solid black;
  height: 100%;
}

.ad_display {
  width: 100%;
  padding: 10px;
  text-align: center;
}
</style>
