<script setup>
import { ref, reactive, watch } from "vue";
import "@fullcalendar/core/vdom";
import Fullcalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
// import useEvents from "../composables/useEvents.js";

const id = ref(10);

// const { getEvents, createEvent, updateEvent, deleteEvent } = useEvents();

const options = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,listDay",
  },
  editable: true,
  selectable: true,
  Weekends: true,
  select: (arg) => {
    id.value = id.value + 1;

    const cal = arg.view.calendar;
    cal.unselect();
    cal.addEvent({
      id: `${id.value}`,
      title: `New event ${id.value}`,
      start: arg.start,
      end: arg.end,
      allDay: true,
    });
  },
  // eventClick: (arg) => {
  //   if (arg.event) {
  //     arg.event.remove();
  //   }
  // },
  // events: [],
  // eventAdd: (arg) => {
  //   createEvent({
  //     id: arg.event.id,
  //     title: arg.event.title,
  //     start: arg.event.start,
  //     end: arg.event.end,
  //     allDay: arg.event.allDay,
  //   });
  // },
  // eventChange: (arg) => {
  //   updateEvent(
  //     {
  //       id: arg.event.id,
  //       title: arg.event.title,
  //       start: arg.event.start,
  //       end: arg.event.end,
  //       allDay: arg.event.allDay,
  //     },
  //     arg.event.id
  //   );
  // },
  // eventRemove: (arg) => {
  //   deleteEvent(arg.event.id);
  // },
});
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-flow-row-dense grid-cols-3 mr-10">
      <div>03</div>
      <div class="col-span-2">
        <Fullcalendar v-bind:options="options" />
      </div>
    </div>
  </div>
</template>

<style></style>
