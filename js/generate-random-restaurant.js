/**
 * 
* Gets restaurant data from googlesheets
* Generates a random restaurant
 * 
 */

import { credentials } from "./credentials.js";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${credentials.spreadsheetId}/values/${credentials.range}?alt=json&key=${credentials.apiKey}`;
//get data
async function fetchData(url) {
   const data = await fetch(url)
    .then(response => response.json())
   return data;
}
//get a random restaurant from data
async function getRandomRestaurant(callback){
    let data = await fetchData(url);
    let values = data.values;
    const details = values.slice(1);
    const randomIndex = Math.floor(Math.random() * details.length);
    const restaurant = details[randomIndex];
    callback(restaurant);
}

export { getRandomRestaurant }