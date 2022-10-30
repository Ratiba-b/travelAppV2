/*** Import des modules necessaires */

import Axios from "./caller.service";
// import authGuard from "../_helpers/auth-guard";

let getAllUsers = () => {
  return Axios.get("/users/");
};

let getUser = (id) => {
  return Axios.get("/users/" + id);
};

let updateUser = (user) => {
  return Axios.patch("/users/" + user.id, user);
};

let createUser = (user) => {
  return Axios.put("/users", user);
};

let deleteUser = (id) => {
  return Axios.delete("/users/" + id);
};

let getUserBoard = () => {
  return Axios.get("/api/test/user", { headers: authGuard() });
};
export const userService = {
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
};
