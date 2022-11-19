import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";
import router from "@/router";
import Axios from "../_services/caller.service";

export const useTravelStore = defineStore("travel", {
  state: () => ({
    user: {
      id: localStorage.getItem("userId"),
      username: null,
      email: null,
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
    async addTravel(travel) {
      console.log("travel store", travel);
      const response = await this.http
        .put(`${this.API_URL}/travels`, travel)
        //   travelService
        //     .addTravels(this.travel)
        .then(this.getTravels())
        .catch((err) => console.log(err));
      router.push("home/travels/list");
      console.log("envoyé", this.travels);
      console.log("envoyé", response);
    },

    async saveTravel(travel) {
      console.log("envoyé", travel);
      const response = await this.http
        .put(`${this.API_URL}/travels`, travel)
        //   travelService
        //     .addTravels(this.travel)
        .then(this.getTravels())
        .catch((err) => console.log(err));

      console.log("envoyé", this.travels);
      console.log("envoyé", response);
    },

    async getTravels() {
      console.log("user", this.user.id);
      const response = await this.http
        .get(`${this.API_URL}/travels/`, {
          id: this.user.id,
        })
        .catch((err) => console.error("getTravels", err));
      console.log("travel response", response);
      console.log("status", response.status);
      this.travels = response.data.data;
      console.log("status", response.status);
      console.log("travels", this.travels);
      return response;
    },
  },
});
