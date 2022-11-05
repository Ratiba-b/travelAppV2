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
    async login(user) {
      console.log("credentials", user);
      const response = await this.http.post(`${this.API_URL}/api/signin`, {
        username: user.username,
        password: user.password,
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
      console.log("user", this.user.id);
    },

    isLogged() {
      console.log("isLogged");
      return !!this.token;
    },

    logout() {
      console.log("auth store logout() remove token");
      localStorage.clear();
      this.$reset();
    },

    async register(user) {
      const response = await this.http.put(`${this.API_URL}/api/signup`, {
        username: user.username,
        email: user.email,
        roles: user.roles,
        password: user.password.password,
      });
      console.log("response", response);
      return response;
    },

    async getUser() {
      // let id = localStorage.getItem("userId");
      console.log(this.user.id);
      const response = await this.http
        .get(`${this.API_URL}/users/${this.user.id}`, {
          headers: { "x-access-token": this.token },
        })
        .catch((err) => console.log("getUser", err));
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

    async getTravels(user) {
      console.log("user", user);
      const response = await this.http
        .get(`${this.API_URL}/travels/`, {
          id: user,
          headers: { "x-access-token": this.token },
        })
        .catch((err) => console.error("getTravels", err));
      console.log("travel response", response);
      console.log("status", response.status);
      this.travels = response.data.data;
      console.log("status", response.status);
      console.log("travels", this.travels);
    },
  },
});
