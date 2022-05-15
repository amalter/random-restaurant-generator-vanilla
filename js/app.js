import { url, fetchData } from "./sheets-data.js";

function randomRestaurantArray (data) { 
   const values = data.values;
   const details = values.slice(1);
   getRandomRestaurant(details);
}

function printRandomRestaurant(restaurant){
    const restaurantName = document.querySelector("#random-restaurant_name");
    restaurantName.textContent = restaurant[0];
}

function getRandomRestaurant(obj){
    const randomIndex = Math.floor(Math.random() * obj.length);
    const restaurant = obj[randomIndex];
    printRandomRestaurant(restaurant);
}

const generatorBtn = document.querySelector("#random-restaurant-btn");
generatorBtn.addEventListener("click", function (e){
    fetchData(url, randomRestaurantArray);
});