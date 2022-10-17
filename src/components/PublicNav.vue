<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/cocktails">Cocktails</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/admin/dashboard">Admin</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PublicNav",
};
</script>

<style></style>
