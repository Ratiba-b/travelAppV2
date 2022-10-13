//Vuex Store that contains all modules
// import { auth } from "./auth.module";

// const store = defineStore({
//   modules: {
//     auth,
//   },
// });

// export default store;
import axios from "axios";
import { defineStore } from "pinia";

export const useHttpStore = defineStore("http", {
  actions: {
    async post(url, datas) {
      return await axios.post(url, datas);
    },

    async get(url, datas) {
      return await axios.get(url, datas);
    },

    async put(url, datas) {
      return await axios.put(url, datas);
    },
  },
});
