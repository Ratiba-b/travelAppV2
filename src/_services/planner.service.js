import Axios from "./caller.service";

let getEvents = async (id) => {
  console.log("id event", id);
  return Axios.get(`/plannings/${id}`);
};

export const plannerService = {
  getEvents,
};
