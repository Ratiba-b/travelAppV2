import Axios from "./caller.service";

let addEvent = async (datas) => {
  return Axios.put("/events", {
    planning_id: 12,
    description: datas.title,
    start: datas.start,
    end: datas.end,
  });
};

export const eventService = {
  addEvent,
};
