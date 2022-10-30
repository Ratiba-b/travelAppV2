import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";

export const useEventsStore = defineStore("createEvent", {
  state: () => ({
    events: [],
    eventToAdd: {},
    planning_id: 2,
    API_URL: "http://localhost:8080",
    token: localStorage.getItem("token"),

    // call http store
    http: useHttpStore(),
  }),
  // getters: {
  //   getEvents: (state) => {
  //     return state.events;
  //   },
  // },
  actions: {
    /**
     *
     *  @param event
     */
    async addEvent() {
      console.log("events", this.eventToAdd);
      await this.http
        .put(`${this.API_URL}/events`, {
          planning_id: this.eventToAdd.planning_id,
          description: this.eventToAdd.title,
          start: this.eventToAdd.start,
          end: this.eventToAdd.end,
          allDay: this.eventToAdd.allDay,
        })
        .then(
          (this.eventToAdd = {}),
          console.log("event enregistré", this.eventToAdd)
        )
        .catch((error) => console.log("error", error));
    },

    async getEvents() {
      console.log("getEvents", this.events);
      const response = await this.http.get(
        `${this.API_URL}/plannings/${this.planning_id}`,
        {
          headers: { "x-access-token": this.token },
        }
      );

      console.log("response", response);
      // this.events = response.data.data.Events;
      // console.log("allEvents", this.events);
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
