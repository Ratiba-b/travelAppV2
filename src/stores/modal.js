import { defineStore } from "pinia";

export default defineStore("modal", {
  //ouvrir le modal login/register
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
