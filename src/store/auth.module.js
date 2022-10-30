import AuthService from "../oldservices/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = defineStore("auth", {
  namespaced: true,
  state: () => ({
    initialState,
  }),
  getters: {
    loginSuccess(state, user) {
      state.initialState.status.loggedIn = true;
      state.initialState.user = user;
    },
    loginFailure(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },
    logout(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },
    registerSuccess(state) {
      state.initialState.status.loggedIn = false;
    },
    registerFailure(state) {
      state.initialState.status.loggedIn = false;
    },
  },
  actions: {
    login(user) {
      return AuthService.login(user).then((user) => {});
    },
  },
});
