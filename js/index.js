/**
 *
 * Generates Random Restaurant on Button click
 * Builds object with Restauran data
 * Prints Random Restaurant info to Dom
 *
 */

import { restaurantObj } from "./restaurant-data.js";
import { getRandomRestaurant } from "./generate-random-restaurant.js";
import {
  formBtn,
  checkboxes,
  getFilters,
  requireSelection,
} from "./filters.js";

/**-----------------------------------------------
 *
 * Event listner on form submit
 * Gets User selected filters
 * If filters are selected, generates a random restaurant based on user input
 *
 */
formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getFilters(checkboxes);
  let filters = getFilters(checkboxes);
  if (requireSelection(filters)) {
    restaurantObj(getRandomRestaurant, filters);
  }
  displayTransition();
});

/**
 * Restaurant Opacity animation
 */

function displayTransition() {
  let restaurantDiv = document.querySelector("#random-restaurant");
  restaurantDiv.style.opacity = "0";
  setTimeout(function () {
    restaurantDiv.style.opacity = "1";
  }, 200);
}

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
