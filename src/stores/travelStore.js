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

    travels: [],

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

    async getTravels(id) {
      console.log("user", id);
      const response = await this.http
        .get(`${this.API_URL}/travels/${id}`, {})
        .then((res) => {
          this.travels = res.data.data;
        })
        .catch((err) => console.error("getTravels", err));
      console.log("travel response", response);
      // for (let i = 0; i < response.data.data.length; i++) {
      //   let lng = parseInt(response.data.data[i].longitude);
      //   let lat = parseInt(response.data.data[i].latitude);
      //   this.travels.push({
      //     created_for: response.data.data[i].created_for,
      //     description: response.data.data[i].description,
      //     endDate: response.data.data[i].endDate,
      //     id: response.data.data[i].id,
      //     latitude: lat,
      //     location: response.data.data[i].location,
      //     longitude: lng,
      //     startDate: response.data.data[i].startDate,
      //     title: response.data.data[i].title,
      //     user_id: response.data.data[i].user_id,
      //   });
      // }
      console.log("travels", this.travels);
    },

    async findTravelById(id) {
      return await Axios.get(`/travels/${id}`);
    },
  },
});
