/**
 *
 * Filters random restaurant out put from user entry
 *
 */

/**
 *
 * Declare & assign form and input variables
 *
 * */

const form = document.querySelector("#restaurant-filter_form");
const checkboxes = document.querySelectorAll(
  ".filters-fieldset input[type='checkbox']:not(#all)"
);
const selectAll = document.querySelectorAll(
  ".filters-fieldset input[id='all']"
);

/**-----------------------------------------------
 *
 * Event listner on form submit
 *
 */
form.addEventListener("submit", function (e) {
  handleForm(e, checkboxes);
});

/**
 * Prevents default reload of page on submit click
 * builds an array of selected filters
 *
 * @param {*} e
 * @param {*} checkboxes
 */
function handleForm(e, checkboxes) {
  e.preventDefault();
  let filtersArray = selectedFilters(checkboxes);
  console.log("filtersArray", filtersArray);
}

/**
 *
 * selectedFilters function returns object containing selected neighborhood and cuisine filters
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

/**-----------------------------------------------
 *
 * Event listner on "Select All" checkbox changes
 *
 */
selectAll.forEach((all) => {
  all.addEventListener("change", function (e) {
    selectAllToggle(all, checkboxes);
  });
});

/**
 * selectAllToggle function called on "select all" checkbox change
 * if "Select All" is checked/unchecked, all other checkboxes will be checked/unchecked
 * @param {*} all
 * @param {*} checkboxes
 */
function selectAllToggle(all, checkboxes) {
  let classList = all.classList;
  checkboxes.forEach((checkbox) => {
    if (checkbox.classList.contains(classList)) {
      checkbox.checked = all.checked;
    }
  });
}

/**-----------------------------------------------
 *
 * Event listner on checkbox changes (excluding "Select All")
 *
 */
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    clearSelectAll(checkbox, selectAll);
  });
});

/**
 * clearSelectAll function called on checkbox change
 * clears check from the "Select All" checkbox if other item is checked in list
 * @param {*} checkbox
 * @param {*} selectAll
 */
function clearSelectAll(checkbox, selectAll) {
  let classList = checkbox.classList;
  selectAll.forEach((allCheckbox) => {
    if (!checkbox.checked && allCheckbox.classList.contains(classList)) {
      allCheckbox.checked = checkbox.checked;
    }
  });
}
