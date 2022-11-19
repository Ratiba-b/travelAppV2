/** Import des modules necessaires  */
import { useNotifStore } from "../stores/notifStore";
import { useAuthStore } from "../stores/authStore";

import axios from "axios";
import { accountService } from "@/_services";
import router from "@/router";

const Axios = axios.create({
  baseURL: "http://localhost:8080",
});

/**intercepte le token et l'injecte dans le header coté navigateur */
Axios.interceptors.request.use((request) => {
  console.log("caller service - Axios interceptors request:", request);
  //si connecté on ajoute le token dans l'entete

  if (useAuthStore().isLogged()) {
    request.headers = { "x-access-token": useAuthStore().token };
  }
  return request;
});

/** Analyser la reponse de l'api pour voir si le token est tjs valide */
/** si token non valide session expiré redirection page login */
Axios.interceptors.response.use(
  (response) => {
    console.log("response");
    return response;
  },
  (error) => {
    const notif = useNotifStore();
    const auth = useAuthStore();
    if (!error.response) {
      //erreur réseau j'envoie direct une erreur pour etre affiché
      notif.displayNotif({ d: true, mes: error });
      console.log("error.response", error.response.data.message);
      return Promise.reject(error);
    } else {
      console.log("notif", notif.notifDisplay, notif.notifMessage);
      console.log("error.response", error.response);

      if (error.response.status == 401) {
        console.log("logout");
        auth.logout();
        router.push("/login");
      } else {
        // autre type d'erreur
        notif.displayNotif({ d: true, mes: error.response.data.message });
        console.log("error.response", error.response.data.message);

        return Promise.reject(error);
      }
    }
  }
);
export default Axios;
