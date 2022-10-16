import { createApp } from "vue";
import { createPinia } from "pinia";
// import "./validator.js";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
// import "./includes/validation";
import "./includes/firebase";
import "./assets/base.css";
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(store);
app.use(pinia);

app.mount("#app");
