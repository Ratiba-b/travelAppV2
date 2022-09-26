<template>
  <div class="about">
    <h1>Page dynamic</h1>
    <p>Id {{ id }}</p>
  </div>
</template>
<script>
export default {
  props: ["id"],

  created() {
    setTimeout(() => {
      console.log(this.id);
    }, 1500);
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
