import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";
import router from "@/router";
import Axios from "../_services/caller.service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: [],
    id: localStorage.getItem("userId"),
    roles: localStorage.getItem("roles"),
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
      this.roles = response.data.roles;
      this.id = response.data.id;
      localStorage.setItem("token", this.token);
      localStorage.setItem("roles", this.roles);
      localStorage.setItem("userId", this.id);
      console.log("token", this.token);
      console.log("roles", this.roles);
      console.log("user", this.id);
      router.push("/home/dashboard");
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
      console.log("user", user);
      const response = await this.http.put(`${this.API_URL}/api/signup`, {
        createdBy: this.id,
        name: user.name,
        surname: user.surname,
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
      console.log(this.id);
      await this.http
        .get(`${this.API_URL}/users/${this.id}`)
        .then((res) => {
          this.user = res.data.data;
        })
        .catch((err) => console.log("getUser", err));

      console.log("data", this.user);
    },

    async getTravels() {
      console.log("user", this.id);
      const response = await this.http
        .get(`${this.API_URL}/travels/`, {
          id: this.id,
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
