import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      events: [],
    };
  },
  getters: {
    getEvents(state) {
      return state.events;
    },
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      state.events.push(event);
    },
  },
  actions: {},
});
export default store;
