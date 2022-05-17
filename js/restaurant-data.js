/**
 *
 * Gets restaurant data from googlesheets
 * Generates a random restaurant
 *
 */

import { credentials } from "./credentials.js";
import { Restaurant } from "./restaurant-class.js";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${credentials.spreadsheetId}/values/${credentials.range}?alt=json&key=${credentials.apiKey}`;

//get data
async function fetchData(url, callback) {
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
  // return data;
}

//get a random restaurant from data
function buildRestaurantObj(data) {
  let restaurants = data.values.slice(1);
  let restaurantObj = {};
  restaurants.forEach((restaurant, i) => {
    restaurantObj[i] = {
      name: restaurant[0],
      menuUrl: restaurant[1],
      neighborhood: restaurant[2],
      address: restaurant[3],
      cuisine: restaurant[4],
      keywords: restaurant[5],
      vegan: restaurant[6],
    };
  });

  console.log("restaurantObj", restaurantObj);
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  fetchData(url, buildRestaurantObj);
});

//export restaurantObj;
