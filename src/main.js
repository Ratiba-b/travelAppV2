import { createPinia } from "pinia";
import { useNotifStore } from "./stores/notifStore";

import { createApp } from "vue";
// import "./validator.js";
import App from "./App.vue";
import router from "./router";
// import * as VueGoogleMaps from "vue2-google-maps";
// import VeeValidate from "vee-validate";
// import store from "./store/store";
// import "./includes/validation";
// import "./includes/firebase";
import "./assets/base.css";
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);
// app.use(VueGoogleMaps, {
//   load: {
//     key: AIzaSyASQk5_N96LVHAJ4KKvY2t26WnnVHo5qeM,
//     libraries: "places",
//   },
// });
app.use(router);
// app.use(store);
app.use(pinia);
// app.use(VeeValidate);

app.mount("#app");
const notif = useNotifStore();
