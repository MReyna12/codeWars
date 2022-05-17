// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// Function declaration/arrow function
function invert(array) {
  return array.map((element) => element * -1);
}

// Function expression/arrow function
const invert = (array) => array.map((element) => element * -1);
