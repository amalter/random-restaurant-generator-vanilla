/**
 *
 * Gets restaurant data from googlesheets
 * Generates a random restaurant
 *
 */

/**
 * Generates a random restaurant from spreadsheet data
 * Checks if random restaurant matches user selected filters
 * If matched, print restaurant
 * If not matched, re-run function
 * Uses numberOfTries variable to prevent infinite loop
 *
 */
var numberOfTries = 0;
function getRandomRestaurant(data, filters) {
  let length = Object.keys(data).length;
  const randomIndex = Math.floor(Math.random() * length);
  const restaurant = data[randomIndex];
  //check if random restaurant matches user selected filters
  let isMatched =
    filters.neighborhoods.includes(restaurant.neighborhood) &&
    filters.cuisines.includes(restaurant.cuisine);

  if (isMatched) {
    printRandomRestaurant(restaurant);
    numberOfTries = 0; //reset numberOfTries
  } else {
    numberOfTries++; //increment numberOfTries
    if (numberOfTries < 100) {
      getRandomRestaurant(data, filters);
    } else {
      tryAgain();
      numberOfTries = 0; //reset numberOfTries
    }
  }
}

/**
 *  Encodes HTML output
 *  source: https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param {} str
 * @returns
 */
function htmlEncode(str) {
  return String(str).replace(/[^\w. ]/gi, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}

/**
 * print random restaurant to dom
 * @param {
 * } restaurant
 */
function printRandomRestaurant(restaurant) {
  let name = htmlEncode(restaurant.name);
  let menuUrl = htmlEncode(restaurant.menuUrl);
  let cuisine = htmlEncode(restaurant.cuisine);
  let address = htmlEncode(restaurant.address);
  let neighborhood = htmlEncode(restaurant.neighborhood);
  let element = document.querySelector("#random-restaurant");
  let content = `
          <h2>${name}</h2>
          <ul class="random-restaurant_details">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/></svg>
                <a href="${menuUrl}"> Menu</a> | ${cuisine} Cuisine
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z"/></svg>
              Neighborhood:   
              <a href="${address}">${neighborhood}</a>
              </li>
       
          </ul>  
        `;
  element.innerHTML = content;
}

function tryAgain() {
  let element = document.querySelector("#random-restaurant");

  let restaurantContent = `
          <h2>Please try again...</h2>
          <p>There are no restaurants that match your criteria.</p>
        `;
  element.innerHTML = restaurantContent;

  let alert = document.querySelector(".message-alert");
  let alertContent = `
  <span class="select-more">Select more neighborhoods and/or cuisines.</span>
`;
  alert.innerHTML = alertContent;
}

export { getRandomRestaurant };
