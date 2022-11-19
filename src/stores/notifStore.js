import Axios from "axios";
import { defineStore } from "pinia";

export const useNotifStore = defineStore("notif", {
  state: () => ({
    notifDisplay: false,
    notifMessage: "",
    successDisplay: false,
  }),
  getters: {
    getNotif: (state) => {
      console.log("getNotif", state.notifDisplay);
      return state.notifMessage;
    },
    getNotifMessage: (state) => {
      console.log("getNotif", state.notifMessage);

      return state.notifDisplay;
    },
    getSuccess: (state) => {
      console.log("getNotifSuccess", state.successDisplay);
      return state.successDisplay;
    },
  },
  actions: {
    displayNotif(payload) {
      console.log("displaynotif", payload);
      this.notifDisplay = payload.d;
      this.notifMessage = payload.mes;
      console.log("message", this.notifMessage);
    },
    displaySuccessNotif(state, display) {
      console.log("displaynotif", state, display);
      state.notifDisplay = display;
    },
  },
});
