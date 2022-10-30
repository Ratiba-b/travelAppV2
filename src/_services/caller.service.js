/** Import des modules necessaires  */
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

  if (accountService.isLogged()) {
    request.headers = { "x-access-token": accountService.getToken() };
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
    if (error.response.status === 401) {
      accountService.logout();
      router.push("/login");
    }
  }
);
export default Axios;
