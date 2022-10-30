//authentication module
import { email } from "@vee-validate/rules";
import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";

export const useAuthStore = defineStore("auth", {
  sate: () => ({
    user: {
      id: null,
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      roles: [],
    },

    // Token
    token: localStorage.getItem("token"),
    refresh: null,
    // remembered: false,

    //API URL
    API_URL: "http://localhost:3000/api/auth/",

    // http store
    http: useHttpStore(),
  }),

  actions: {
    async login(username, password, remember) {
      const response = await this.http
        .post(`${this.API_URL}/login`, {
          username: username,
          password: password,
        })
        .then(console.log("login ok"))
        .catch((err) => console.log(err));
      this.token = response.data.token;
      this.remembered = remember;
      localStorage.setItem("token", this.token);
      localStorage.setItem("remember", this.remembered);
      this.$router.push("/");
      console.log("vous etes login");
    },

    disconnect() {
      console.log("disconnect user");
      localStorage.clearItem("token");
      this.$reset();
      this.$router.push("/login");
    },

    isConnected() {
      return this.token != null;
    },

    async createAccount(user) {
      const response = await this.http.post(`${this.BASE_URL}/register`, {
        email: user.email,
        username: user.username,

        password: user.password,
        roles: [user.role],
      });
      return response;
    },
  },
});

// const user = JSON.parse(localStorage.getItem("user"));
// const initialState = user
//   : { status: { loggedIn: false }, user: null };

// export const authStore = defineStore('auth',{
//   namespaced: true,
//   state:() =>{
//     return {initialState},

//   actions: {
//     login({ commit }, user) {
//       return AuthService.login(user).then(
//         (user) => {
//           commit("loginSuccess", user);
//           return Promise.resolve(user);
//         },
//         (error) => {
//           commit("loginFailure");
//           return Promise.reject(error);
//         }
//       );
//     },
//     logout({ commit }) {
//       AuthService.logout();
//       commit("logout");
//     },
//     register({ commit }, user) {
//       return AuthService.register(user).then(
//         (response) => {
//           commit("registerSuccess");
//           return Promise.resolve(response.data);
//         },
//         (error) => {
//           commit("registerFailure");
//           return Promise.reject(error);
//         }
//       );
//     },
//     loginSuccess(state, user) {
//       state.status.loggedIn = true;
//       state.user = user;
//     },
//     loginFailure(state) {
//       state.status.loggedIn = false;
//       state.user = null;
//     },
//     logout(state) {
//       state.status.loggedIn = false;
//       state.user = null;
//     },
//     registerSuccess(state) {
//       state.status.loggedIn = false;
//     },
//     registerFailure(state) {
//       state.status.loggedIn = false;
//     },
//   },

//   }
// });
