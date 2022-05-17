// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// Function declaration/if/else statement
function find_average(array) {
  let total = array.reduce((prev, current) => (prev += current), 0);
  let average = total / array.length;
  if (array == Number([])) {
    return 0;
  } else {
    return average;
  }
}

// Function expression/ternary operator/arrow function
const find_average = (array) =>
  array.length === 0
    ? 0
    : array.reduce((prev, current) => prev + current, 0) / array.length;
