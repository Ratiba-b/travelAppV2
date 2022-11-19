//Vuex Store that contains all modules
// import { auth } from "./auth.module";

// const store = defineStore({
//   modules: {
//     auth,
//   },
// });

// export default store;
import Axios from "../_services/caller.service";
import { defineStore } from "pinia";

export const useHttpStore = defineStore("http", {
  actions: {
    async post(url, datas) {
      return await Axios.post(url, datas);
    },

    async get(url, datas) {
      return await Axios.get(url, datas);
    },

    async put(url, datas) {
      return await Axios.put(url, datas);
    },
    async patch(url, datas) {
      return await Axios.patch(url, datas);
    },
    async delete(url) {
      return await Axios.patch(url);
    },
  },
});
