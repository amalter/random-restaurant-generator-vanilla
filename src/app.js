//test array with restaurant names

const restaurants = [
    {
        name: "Cycle Dogs"
    },
    {
        name: "Wayward Vegan Cafe"
    },
    {
        name: "El Borracho"
    },

]

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