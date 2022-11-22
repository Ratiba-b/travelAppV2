import Axios from "./caller.service";

let addTravels = async (datas) => {
  console.log("addTravels", datas);

  return await Axios.put("/travels", datas);
};

let findTravelById = async (id) => {
  return await Axios.get(`/travels/${id}`);
};

export const travelService = {
  addTravels,
  findTravelById,
};
