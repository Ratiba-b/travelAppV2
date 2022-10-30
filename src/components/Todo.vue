<template>
  hhhhhh
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        hey,
        <input type="text" placeholder="Pseudo" v-model="name" />
      </h2>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");

const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return a.createdAt - b.createdAt;
  })
);

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});
</script>

<style></style>
