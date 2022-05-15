/**
 * 
 * Generates Random Restaurant on Button click
 * Builds object with Restauran data
 * Prints Random Restaurant info to Dom
 * 
 */

import { getRandomRestaurant } from "./generate-random-restaurant.js";

//generate random restaurant on button click
const generatorBtn = document.querySelector("#random-restaurant-btn");
generatorBtn.addEventListener("click", function (e){
   getRandomRestaurant(randomRestaurantObj);
});

//build restaurant obj
function randomRestaurantObj(restaurant){
    let restaurantObj = {
        name : restaurant[0],
        menuUrl: restaurant[1],
        neighborhood : restaurant[2],
        address : restaurant[3],
        cuisine : restaurant[4],
        keywords : [restaurant[5]],
        vegan : restaurant[6]
    }
    printRandomRestaurant(restaurantObj);
  }

//print to dom
function printRandomRestaurant(restaurant){
  let element = document.querySelector("#random-restaurant");
  let content = `
    <h2>${restaurant.name}</h2>
    <ul>
        <li><a href="${restaurant.menuUrl}">Menu</a></li>
        <li>Address: ${restaurant.address}</li>
        <li>Neighborhood: ${restaurant.neighborhood}</li>
        <li>Cuisine: ${restaurant.cuisine}</li>
        <li>Keywords: ${restaurant.keywords}</li>
        <li>Vegan Restaurant: ${restaurant.vegan}</li>
    </ul>  
  `;
  element.innerHTML = content;
}