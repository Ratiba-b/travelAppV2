<template>
  <div class="container mx-auto">
    calendar
    <agenda />
  </div>
</template>

<script>
import CalendarTable from "../components/Planner.vue";
import Agenda from "../components/Agenda.vue";

export default {
  name: "calendar",
  components: {
    CalendarTable,
    Agenda,
  },
};
</script>

<style></style>
