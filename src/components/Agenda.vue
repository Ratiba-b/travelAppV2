<template>
  agenda
  <FullCalendar v-bind:options="calendarOptions" />
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="hiddenClass"
  >
    <Event-modal :event="newEvent" />
  </div>

  <!-- teleport target -->
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
import { mapStores, mapState, mapActions, mapWritableState } from "pinia";
import { useEventsStore } from "../store/piniaStore";
import EventModal from "./EventModal.vue";
import { defineComponent, ref } from "vue";
import store from "../store/store";
import useModalStore from "../store/modalStore";

const isShow = false;
const modalActive = true;

const storeEvents = useEventsStore();
const storeModal = useModalStore();

export default {
  components: {
    FullCalendar,
    EventModal,
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
        weekends: true,
        events: storeEvents.events,
        dateClick: this.handleDateClick,
        select: this.handleSelectClick,
        eventClick: this.handleEventClick,
        editable: true,
        eventResize: this.updateEvent,
        eventDrop: this.updateEvent,
        eventDidMount: this.renderEvent,
      },
      isModalVisible: false,
      isShowModal: false,
      newEvent: {},
    };
  },
  computed: {
    ...mapStores(useEventsStore, useModalStore),
    ...mapState(useEventsStore, ["events", "double"]),
    ...mapWritableState(useModalStore, ["isOpen"]),
    ...mapState(useModalStore, ["hiddenClass"]),
  },
  methods: {
    ...mapActions(useEventsStore, ["addEvent"]),
    handleSelectClick(arg) {
      // console.log(arg);
      console.log("handleSelectClick() | arg: ", arg);
      this.newEvent = {
        id: new Date().getTime(),
        title: "ajouter  ",
        start: this.formatDate(arg.start),
        end: this.formatDate(arg.end),
        allDay: arg.allDay,
      };

      // this.calendarOptions.events.push(event);

      // alert("date click! " + arg.dateStr);
      storeEvents.addEvent(this.newEvent);
      console.log("add event", storeEvents.events);
      console.log(storeModal.hiddenClass);
    },
    handleEventClick(arg) {
      // this.$modal.show(EventModal);
      this.modalStore.isOpen = !this.isOpen; // mapWritable store permet d'acceder directement a isOpen dans le store
      console.log("modal store", this.isOpen);
      this.newEvent;
      // this.newEvent = {
      //   id: this.newEvent.id,
      //   title: arg.event.title,
      //   start: this.formatDate(arg.event.start),
      //   end: this.formatDate(arg.event.end),
      // };
      console.log("handleEventclick() | newEvent:", this.newEvent);
    },
    /**********************************************/
    /**FONCTION QUI CHANGE LE FORMAT DE LA DATE */
    formatDate(date) {
      console.log("formatDate() | date: ", this.newEvent.start);
      let options = { year: "numeric", month: "2-digit", day: "2-digit" };
      let string = date
        .toLocaleDateString("ko-KR", options)
        .replace(/\. /g, "-");

      return string.substr(0, string.length - 1);
    },
    updateEvent(arg) {
      /*************************************/
      /** CHANGE L EVENT ET ENVOIE LE NOUVEL EVENT DANS HANDLESELECTCLICK*/
      storeEvents.updateEvent(arg.event);
      console.log("updateEvent () | newEvent", this.newEvent);
      console.log("updateEvent () arg.event", arg.event);
    },
    renderEvent(arg) {
      console.log("renderEvent", arg);
      let span = document.createElement("span");

      span.setAttribute("class", "fa-solid fa-pen-to-square");
      arg.el.appendChild(span);
    },
  },
};
</script>

<style></style>
