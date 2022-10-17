/** Import des modules necessaires */
import Axios from "./caller.service";

let login = (credentials) => {
  return Axios.post("/auth/login", credentials);
};

let logout = () => {
  localStorage.removeItem("token");
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; // transforme une string en boolean / si il y a rien cela renvoie false et si il y a une string dans token alors c'est true qui est renvoyé
};

export const accountService = {
  login,
  logout,
  saveToken,
  isLogged,
};
