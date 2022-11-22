import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";
import router from "@/router";
import Axios from "../_services/caller.service";

export const useStepStore = defineStore("step", {
  state: () => ({
    steps: [],
    travel: {},
    token: localStorage.getItem("token"),

    API_URL: "http://localhost:8080",

    // call http store
    http: useHttpStore(),
  }),
  // getters: {
  //   saveRoles(state) {
  //     localStorage.setItem("roles", state.user.roles);
  //   },
  //},

  actions: {
    async getSteps(travel_id) {
      console.log("travel_id", travel_id);
      await this.http.get(`${this.API_URL}/steps/${travel_id}`).then((res) => {
        this.steps = res.data.data;
        console.log("this step", res);
        //   for (let i = 0; i < res.data.data.length; i++) {
        //     let start = res.data.data[i].start.split("T").slice(0, 1).join("");
        //     let end = res.data.data[i].end.split("T").slice(0, 1).join("");

        //     console.log("showstep", res.data.data[i]);
        //     // this.steps.push({
        //     //   step_id: res.data.data[i].id,
        //     //   travel_id: res.data.data[i].travel_id,
        //     //   city: res.data.data[i].city,
        //     //   airline: res.data.data[i].airline,
        //     //   depIata: res.data.data[i].depIata,
        //     //   date: res.data.data[i].date,
        //     //   depHour: res.data.data[i].depHour,
        //     //   depTerminal: res.data.data[i].depTerminal,
        //     //   arrIata: res.data.data[i].arrIata,
        //     //   arrHour: res.data.data[i].arrHour,
        //     //   arrTerminal: res.data.data[i].arrTerminal,
        //     //   flightNumber: res.data.data[i].flightNumber,
        //     //   country: res.data.data[i].country,
        //     //   start: start,
        //     //   end: end,
        //     // });
        //   }
      });

      // this.travels = res.data.data.Travel;

      console.log("res", this.steps);
    },
  },
});
