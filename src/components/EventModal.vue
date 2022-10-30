<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="hiddenClass"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div> -->

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transvee-form transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click.prevent="isOpen = false"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <fieldset>
            <legend>Event details:</legend>
            <b>Title:</b> {{ event.title }} <br />
            <b>Start:</b> {{ event.start }} <br />
            <b>End:</b> {{ event.end }} <br />
            <b>ID:</b> {{ event.id }} <br />
          </fieldset>
          <fieldset>
            <legend>Event details:</legend>
            <input type="text" v-model="event.title" />
            <input type="date" v-model="event.start" />
            <input type="date" v-model="event.end" />
            {{ eventProp }}
            <button @click.prevent="updateEvent">save</button>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions, mapWritableState } from "pinia";

import { useEventsStore } from "../stores/piniaStore";
import useModalStore from "../stores/modalStore";

const storeEvents = useEventsStore();

export default {
  name: "Modal",
  props: {
    event: {
      type: Object,
    },
  },
  created() {
    this.eventProp.title = this.event.title;
    this.eventProp.start = this.event.start;
    this.eventProp.end = this.event.end;
    console.log("string date", this.event);
  },
  data() {
    return {
      editEvent: {
        id: this.event.id,
        title: this.event.title,
        start: this.event.start,
        end: this.event.end,
      },
      eventProp: {
        id: this.event.id,
        title: this.event.title,
        start: this.event.start,
        end: this.event.end,
      },
      events: storeEvents.events,
    };
  },

  computed: {
    ...mapStores(useEventsStore),
    ...mapState(useEventsStore, ["events", "double"]),
    ...mapWritableState(useModalStore, ["isOpen"]),
  },

  methods: {
    close() {
      // this.$emit("close");
      console.log(storeEvents.getEvents);
    },
    updateEvent() {
      let updateEvent = {
        id: this.event.id,
        title: this.event.title,
        start: this.event.start,
        end: this.event.end,
      };
      storeEvents.updateEvent(updateEvent);
    },
  },
};
</script>

<style></style>
