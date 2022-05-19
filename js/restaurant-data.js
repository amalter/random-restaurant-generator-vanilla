/**
 *
 * Gets restaurant data from googlesheets
 * Generates a random restaurant
 *
 */

import { credentials } from "./credentials.js";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${credentials.spreadsheetId}/values/${credentials.range}?alt=json&key=${credentials.apiKey}`;

/**
 *  get data
 * */
async function fetchData(url) {
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  return data;
}
/**
 * build object
 * @param {
 * } callback
 */

async function restaurantObj(callback, filters) {
  let data = await fetchData(url);
  let restaurants = data.values.slice(1);
  let restaurantObject = {};
  //build object from fetchData
  restaurants.map((restaurant, i) => {
    restaurantObject[i] = {
      name: restaurant[0],
      menuUrl: restaurant[1],
      neighborhood: restaurant[2],
      address: restaurant[3],
      cuisine: restaurant[4],
      keywords: restaurant[5],
      vegan: restaurant[6],
    };
  });
  //do something with object data
  callback(restaurantObject, filters);
}

export { restaurantObj };
