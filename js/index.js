/**
 *
 * Generates Random Restaurant on Button click
 * Builds object with Restauran data
 * Prints Random Restaurant info to Dom
 *
 */

import { restaurantObj } from "./restaurant-data.js";
import { getRandomRestaurant } from "./generate-random-restaurant.js";
import { form, checkboxes, getFilters } from "./filters.js";

/**-----------------------------------------------
 *
 * Event listner on form submit
 *
 */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getFilters(checkboxes);
  console.log("inside index.js");
});

/**
 * Generate a random restaurant on button click
 */
const generatorBtn = document.querySelector("#random-restaurant_btn");
generatorBtn.addEventListener("click", function (e) {
  restaurantObj(getRandomRestaurant);
});

/**
 * Print footer copyright
 */

function printCopyright() {
  let copyrightEl = document.querySelector(".main_footer #copyright");
  let currentYear = new Date().getFullYear();
  copyrightEl.innerHTML = `
    &copy; ${currentYear} | <a href="https://www.amberalter.com/">Amber Alter</a>
  `;
}

printCopyright();
