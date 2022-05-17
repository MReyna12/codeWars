// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Written as an arrow function/function expression

const squareSum = (numbers) =>
  numbers.reduce(
    (previousValue, currentValue) => (previousValue += currentValue ** 2),
    0
  );

// Written as a function declaration

function squareSum(numbers) {
  return numbers.reduce(function (previousValue, currentValue) {
    return (previousValue += currentValue ** 2);
  }, 0);
}
