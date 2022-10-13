import { defineStore } from "pinia";

export const useEventsStore = defineStore("createEvent", {
  state: () => ({
    events: [],
  }),
  getters: {
    getEvents: (state) => {
      return state.events;
    },
  },
  actions: {
    /**
     *
     *  @param event
     */
    addEvent(arg) {
      this.events.push(arg);
    },
  },
});
