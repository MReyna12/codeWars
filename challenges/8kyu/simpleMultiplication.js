// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Function declaration; ternary operator
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Function expression; ternary operator; arrow function
const simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;
