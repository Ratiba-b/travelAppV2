import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";
import router from "@/router";
import Axios from "../_services/caller.service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      id: localStorage.getItem("userId"),
      username: null,
      email: null,
      roles: localStorage.getItem("roles"),
    },

    travels: {},

    articles: {},

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
    async login(username, password) {
      console.log("credentials", username, password);
      const response = await this.http.post(`${this.API_URL}/api/signin`, {
        username: username,
        password: password,
      });

      console.log("response", response);
      console.log("user id", response.data.id);

      this.token = response.data.access_token;
      this.user.roles = response.data.roles;
      this.user.id = response.data.id;
      localStorage.setItem("token", this.token);
      localStorage.setItem("roles", this.user.roles);
      localStorage.setItem("userId", this.user.id);
      console.log("token", this.token);
      console.log("roles", this.user.roles);
      // this.$router.push("/admin/dashboard");
      console.log("user", this.user.id);
    },

    isLogged() {
      return !!this.token;
    },

    logout() {
      console.log("auth store logout() remove token");
      localStorage.clear();
      this.$reset();
    },
    async getUser() {
      // let id = localStorage.getItem("userId");
      console.log(this.user.id);
      const response = await this.http.get(
        `${this.API_URL}/users/${this.user.id}`,
        {
          data: {
            id: this.user.id,
          },
          headers: { "x-access-token": this.token },
        }
      );
      console.log(this.user.id);
      console.log("response", response);
      const datas = response.data;

      this.user = {
        id: datas.id,
        username: datas.username,
        email: datas.email,
        roles: datas.roles,
      };
      this.travels = datas.data.Travels;
      this.articles = datas.data.Articles;

      console.log("data", datas.data.Travels);
      return response;
    },

    async getTravel() {
      console.log("user", this.user.id);
      const response = await this.http.post(`${this.API_URL}/travels/`, {
        id: this.user.id,
      });
      console.log(response);
    },
  },
});
