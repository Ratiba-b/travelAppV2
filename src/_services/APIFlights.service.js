import axios from "axios";

const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYzIzNTM1MDYxMDVkNjRlMDk1ODIzZWQ2MDU5NGE2MDhiZGNlMjFhNDRiMmM1NTBkNTZmNGUzODkwYzExYjM1MGE1MzY2NTU0YzUzNjBlZWUiLCJpYXQiOjE2NjcyMjU3MjEsIm5iZiI6MTY2NzIyNTcyMSwiZXhwIjoxNjk4NzYxNzIxLCJzdWIiOiIxNjU0NCIsInNjb3BlcyI6W119.DTuPVFQkguBWyp_DYf7U9cR5BAWs5LusFStzVozzPIfMo-xND_rUvCqX5JG_b6q-LeUThNhgba29XSX-3B8jJA";

const API_URL = "https://app.goflightlabs.com";
let getAllFlights = (depIata, arrIata, date) => {
  return axios.get(
    `${API_URL}/advanced-future-flights?access_key=${API_KEY}&type=departure&iataCode=${depIata}&arr_iataCode=${arrIata}&date=${date}`
  );
};

let getAirportByIATA = (iata) => {
  return axios.get(
    `https://app.goflightlabs.com/get-airport-data?access_key=${API_KEY}&query=${iata}`
  );
};

let getCity = (city) => {
  console.log("city", city);
  return axios.get(
    `https://app.goflightlabs.com/cities?access_key=${API_KEY}&search=${city}`
  );
};

let getCountry = (country) => {
  console.log("country", country);
};

export const flightsService = {
  getAllFlights,
  getAirportByIATA,
  getCity,
  getCountry,
};
