// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Function declaration/arrow function

function sum(numbers) {
  return numbers.reduce((previous, current) => (previous += current), 0);
}

// Function expression/arrow function

let sum = (numbers) =>
  numbers.reduce((previous, current) => (previous += current), 0);
