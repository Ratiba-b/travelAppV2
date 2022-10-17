<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
        <li><router-link to="/admin/users/index">User List </router-link></li>
        <li>
          <router-link to="/admin/users/edit/21">User 21</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "adminNav",
};
</script>

<style></style>
