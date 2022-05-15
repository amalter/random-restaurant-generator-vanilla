var restaurants = []
const apiKey = "AIzaSyC1zmiuAFdXP3wytulS0AOxRRjPl6smf_o";
const spreadsheetId = "1qXVoKMWnMvdVq2fhikqdwgSbVo86VVfFoOfDuwg5bPs";
const range = "Sheet1!A1:C";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?alt=json&key=${apiKey}`;
async function fetchData(url, callback) {
   const data = await fetch(url)
    .then(response => response.json())
    .then(data => {return data;} )

    callback(data);
}

function randomRestaurantArray (data) {
    const values = data.values;
    const labels = values[0];
    const details = values.slice(1);
    restaurants.push(labels, details);

}
fetchData(url, randomRestaurantArray);

console.log("restaurants:", restaurants);

function randomRestaurant(restaurant){
    const restaurantName = document.querySelector("#random-restaurant_name");
    restaurantName.textContent = restaurant.name;
}

function getRandomRestaurant(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    const restaurant = array[randomIndex];
    randomRestaurant(restaurant);
}

const generatorBtn = document.querySelector("#random-restaurant-btn");
generatorBtn.addEventListener("click", function (e){
    getRandomRestaurant(restaurants);
})

//console.log(printRandomRestaurant(randomRestaurant));