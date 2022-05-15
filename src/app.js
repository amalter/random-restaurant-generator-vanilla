const apiKey = "AIzaSyC1zmiuAFdXP3wytulS0AOxRRjPl6smf_o";
const spreadsheetId = "1qXVoKMWnMvdVq2fhikqdwgSbVo86VVfFoOfDuwg5bPs";
const range = "Sheet1!A1:C";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?alt=json&key=${apiKey}`;
async function fetchData(url, callback) {
   const data = await fetch(url)
    .then(response => response.json())
    .then(data => {callback(data)} )
}

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