<template>
  agenda
  <FullCalendar v-bind:options="calendarOptions" />
  <modal-containers />
</template>

<script>
// require("@fullcalendar/core/main.min.css");
// require("@fullcalendar/daygrid/main.min.css");
// require("@fullcalendar/timegrid/main.min.css");

import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { mapGetters } from "vuex";
import { mapStores, mapState, mapActions } from "pinia";
import { useEventsStore } from "../store/piniaStore";
import EventModal from "./EventModal.vue";

const storeEvents = useEventsStore();
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        locale: "fr",
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev today next",
          center: "title",
          right: "dayGridMonth,dayGridWeek,listDay",
        },
        buttonText: {
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          list: "Liste",
        },
        editable: true,
        selectable: true,
        Weekends: true,
        events: storeEvents.events,
        dateClick: this.handleDateClick,
        select: this.handleSelectClick,
        eventClick: this.handleEventClick,
      },
      EventModal,
    };
  },
  computed: {
    ...mapStores(useEventsStore),
    ...mapState(useEventsStore, ["events", "double"]),
  },
  methods: {
    ...mapActions(useEventsStore, ["addEvent"]),
    handleSelectClick(arg) {
      // console.log(arg);
      console.log("something", arg.start, arg.end, arg.allDay);
      let event = {
        title: "something",
        start: arg.start,
        end: arg.end,
        allDay: arg.allDay,
      };

      // this.calendarOptions.events.push(event);

      // alert("date click! " + arg.dateStr);
      storeEvents.addEvent(event);
      console.log(storeEvents.events);
    },
    handleEventClick(arg) {
      this.$modal.show(EventModal);
    },
  },
};
</script>

<style></style>
