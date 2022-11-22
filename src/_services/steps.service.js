/*** Import des modules necessaires */
import Axios from "./caller.service";

let createStep = (form) => {
  console.log("data send", form);
  return Axios.put("/steps", form);
};
let removeStep = (id) => {
  console.log("id service", id);
  return Axios.delete(`/steps/${id}`);
};

export const stepsService = {
  createStep,
  removeStep,
};
