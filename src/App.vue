<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/dashboard">Dashboard</router-link> |
  <router-link :to="{ name: 'dynamic', params: { id: 33 } }"
    >Page dynamique</router-link
  >
  |
  <router-link to="/travels">Travels</router-link> |
  <router-link to="/tutorials">Tuto</router-link> |
  <router-link to="/add">Add</router-link>
  <router-view />
</template>

<script>
export default {
  name: "App",

  components: {},
};
</script>
