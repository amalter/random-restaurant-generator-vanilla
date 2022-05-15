/**
 * 
 * Generates Random Restaurant on Button click
 * Prints Random Restaurant info to Dom
 * 
 */

import { getRandomRestaurant } from "./generate-random-restaurant.js";

function printRandomRestaurant(restaurant){
    const restaurantName = document.querySelector("#random-restaurant_name");
    restaurantName.textContent = restaurant[0];
}

const generatorBtn = document.querySelector("#random-restaurant-btn");
generatorBtn.addEventListener("click", function (e){
   getRandomRestaurant(printRandomRestaurant);
});