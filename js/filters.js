/**
 *
 * Filters random restaurant out put from user entry
 *
 */

const form = document.querySelector("#restaurant-filter_form");
const checkboxes = document.querySelectorAll(
  ".filters-fieldset input[type='checkbox']:not(#all)"
);
const selectAll = document.querySelectorAll(
  ".filters-fieldset input[id='all']"
);

console.log("selectAll", selectAll[0]);

form.addEventListener("submit", function (e) {
  handleForm(e, checkboxes);
});
function handleForm(e, checkboxes) {
  e.preventDefault();
  let filtersArray = selectedFilters(checkboxes);
  console.log("checkboxes", checkboxes);
  console.log("filtersArray", filtersArray);
}

/**
 *
 * Builds out an object containing selected neighborhood and cuisine filters
 * @param {
 * } inputs
 * @returns
 */

function selectedFilters(checkboxes) {
  var neighborhoods = [];
  var cuisines = [];
  checkboxes.forEach((input) => {
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
selectAll.forEach((all) => {
  all.addEventListener("change", function (e) {
    selectAllToggle(all, checkboxes);
  });
});

function selectAllToggle(all, checkboxes) {
  let classList = all.classList;
  checkboxes.forEach((checkbox) => {
    if (checkbox.classList.contains(classList)) {
      checkbox.checked = all.checked;
    }
  });
}

function clearSelectAll() {}
