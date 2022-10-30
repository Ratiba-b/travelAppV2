import { defineStore } from "pinia";
import { auth } from "../store/auth.module";

export const useUserStore = defineStore("user", {
  state: () => ({
    notifDisplay: false,
  }),
  getters: {
    getNotif: (state) => {
      return state.notifDisplay;
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
