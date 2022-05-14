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

function getRandomRestaurant(array){
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random restaurant
    const restaurant = array[randomIndex];

    return restaurant;
}

const randomRestaurant = getRandomRestaurant(restaurants);

function printRandomRestaurant(restaurant){
    const restaurantEl = document.querySelector("#random-restaurant");
    const restaurantName = document.createElement("h2");
    restaurantName.textContent = restaurant.name;
    restaurantEl.append(restaurantName);
}





console.log(printRandomRestaurant(randomRestaurant));