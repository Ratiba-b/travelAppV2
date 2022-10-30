import Axios from "./caller.service";

let addTravels = async (datas) => {
  console.log("addTravels", datas);

  return await Axios.put("/travels", datas);
};

let addPlanning = async (datas) => {};

export const travelService = {
  addTravels,
};
