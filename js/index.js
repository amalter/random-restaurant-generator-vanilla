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
 * Gets User selected filters
 * Generates a random restaurant based on user input
 *
 */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getFilters(checkboxes);
  let filters = getFilters(checkboxes);
  restaurantObj(getRandomRestaurant, filters);
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
