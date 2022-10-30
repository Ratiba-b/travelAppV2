<template>
  <div class="app">
    <router-view />
  </div>
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/dashboard">Dashboard</router-link> |
  <router-link :to="{ name: 'dynamic', params: { id: 33 } }"
    >Page dynamique</router-link
  >
  |
  <router-link to="/travels">Travels</router-link> |
  <router-link to="/tutorials">Tuto</router-link> |
  <router-link to="/add">Add</router-link> -->
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "App",

  components: {},
};
</script>
<style lang="scss">
:root {
  --primary: #ffbb98;
  --primary-alt: #22c55e;
  --grey: #fff4f4;
  --dark: #344648;
  --dark-alt: #7d8e95;
  --light: #fbe0c3;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", "sans serif";
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
}

main {
  flex: 1 1 0;
  padding: 2rem;

  @media (max-width: 768px) {
    padding-left: 6rem;
  }
}
</style>
