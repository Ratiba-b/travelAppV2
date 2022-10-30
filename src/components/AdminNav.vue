<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>&nbsp;</li>
        <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
        <li>&nbsp;</li>
        <li><router-link to="/admin/users/index">User List </router-link></li>
        <li>
          <router-link to="/admin/users/add">User Add</router-link>
        </li>
        <li>&nbsp;</li>
        <li>
          <router-link to="/admin/cocktails/index">Cocktails List</router-link>
        </li>
        <li>
          <router-link to="/admin/cocktails/edit">Cocktail Add</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
export default {
  name: "adminNav",
  components: {},
};
</script>

<style></style>
