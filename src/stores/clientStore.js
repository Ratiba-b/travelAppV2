import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";

import router from "@/router";
export const useClientStore = defineStore("client", {
  state: () => ({
    clients: [],
    token: localStorage.getItem("token"),

    API_URL: "http://localhost:8080",

    // call http store
    http: useHttpStore(),
  }),

  actions: {
    async getAllClients() {
      await this.http
        .get(`${this.API_URL}/users/`)
        .then((res) => {
          this.clients = res.data.data;
          console.log("clients", this.clients);
        })
        .catch((err) => console.log(err));
    },
  },
});
