import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";
import router from "@/router";
import Axios from "../_services/caller.service";

export const useStepStore = defineStore("step", {
  state: () => ({
    user: {
      id: localStorage.getItem("userId"),

      roles: localStorage.getItem("roles"),
    },

    travels: {},

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
    addStep(step) {
      console.log("addstep", step);
      this.http
        .put("http://localhost:8080/steps", this.step)

        .then(() => {
          this.getSteps();
        })
        .catch((error) => console.log(error));
    },
    async getSteps(step) {
      const response = await Axios.get(
        `http://localhost:8080/travels/${this.event.travel_id}`,
        { headers: { "x-access-token": this.token } }
      ).then(console.log("ok"));
      console.log("response", response);
    },
  },
});
