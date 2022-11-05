/** Import des modules necessaires */
import Axios from "./caller.service";

let register = (credentials) => {
  return Axios.post("api/auth/signup", credentials);
};

export const registerService = {
  register,
};
