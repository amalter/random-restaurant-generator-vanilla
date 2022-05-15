import { url, fetchData } from "./sheets-data.js";

function getRandomRestaurant(data){
    const values = data.values;
    const details = values.slice(1);
    const randomIndex = Math.floor(Math.random() * details.length);
    const restaurant = details[randomIndex];
    printRandomRestaurant(restaurant);
}

function printRandomRestaurant(restaurant){
    const restaurantName = document.querySelector("#random-restaurant_name");
    restaurantName.textContent = restaurant[0];
}

const generatorBtn = document.querySelector("#random-restaurant-btn");
generatorBtn.addEventListener("click", function (e){
    fetchData(url, getRandomRestaurant);
});