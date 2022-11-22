// import Vue from "vue";
import { createPinia } from "pinia";
import { useNotifStore } from "./stores/notifStore";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";

import "./assets/base.css";
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(SimpleTypeahead);
app.mount("#app");
const notif = useNotifStore();
