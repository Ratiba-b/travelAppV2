/*** Import des modules necessaires */

import Axios from "./caller.service";

let getAllCocktails = () => {
  return Axios.get("/cocktails");
};

let getCocktail = (id) => {
  return Axios.get("/cocktails/" + id);
};

let updateCocktail = (cocktail) => {
  return Axios.patch("/cocktails/" + cocktail.id, cocktail);
};

let createCocktail = (cocktail) => {
  return Axios.put("/cocktails", cocktail);
};

let deleteCocktail = (id) => {
  return Axios.delete("/cocktails/" + id);
};
export const cocktailService = {
  getAllCocktails,
  getCocktail,
  updateCocktail,
  createCocktail,
  deleteCocktail,
};
