<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/login">Dashboard</router-link> | |
  <router-link to="/travels">Travels</router-link> |
  <router-link to="/tutorials">Tuto</router-link> |
  <router-link to="/add">Add</router-link>
  <router-link to="/calendar">Calendar</router-link>

  <router-view />
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",

  components: {
    Home,
  },
};
</script>
