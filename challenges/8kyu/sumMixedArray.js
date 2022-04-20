// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Function declaration; arrow function; reduce method; parseInt to convert currentVal to a number (only need to convert currentVal because acc starts at 0 which is a number)
function sumMix(x) {
  return x.reduce((acc, currentVal) => acc + parseInt(currentVal, 10), 0);
}

// Function expression; arrow function; reduce method; unary operator to convert currentval to a number (only need to convert currentVal because acc starts at 0 which is a number)
const sumMix = x => x.reduce((acc, currentVal) => acc + +currentVal, 0);