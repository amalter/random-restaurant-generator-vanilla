/**
 *
 * Filters random restaurant out put from user entry
 *
 */

const form = document.querySelector("#restaurant-filter_form");

form.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();
  let filterInputs = this.querySelectorAll(".filters-fieldset input");
  let filtersArray = selectedFilters(filterInputs);
  // console.log("selectedArray.neighborhoods", selectedArray.neighborhoods[0]);
  //console.log("filtersArray", filtersArray);
}

/**
 *
 * Builds out an object containing selected neighborhood and cuisine filters
 * @param {
 * } inputs
 * @returns
 */

function selectedFilters(inputs) {
  var neighborhoods = [];
  var cuisines = [];
  inputs.forEach((input) => {
    if (input.checked === true) {
      if (input.classList.contains("neighborhood")) {
        neighborhoods.push(input.name);
      } else if (input.classList.contains("cuisine")) {
        cuisines.push(input.name);
      }
    }
  });

  return { neighborhoods, cuisines };
}
