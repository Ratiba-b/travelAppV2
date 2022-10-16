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
    updateEvent(state) {
      console.log("update event state:", state);

      let index = this.events.findIndex((x) => x.id == state.id);
      console.log("index:", index);

      this.events[index].title = state.title;
      this.events[index].start = state.start;
      this.events[index].end = state.end;
    },
  },
});
