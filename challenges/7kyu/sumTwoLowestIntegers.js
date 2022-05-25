//  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.

//P: array of positive integers; no floats included
//R: sum of the two lowest integers
//E: [1, 2, 3, 4, 5] // 3; [3242, 343, 322, 1] // 323
//P: sort method; add first two integers (index 0 and 1)

// Function declaration
function sumTwoSmallestNumbers(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b);
  const sum = sortedArray[0] + sortedArray[1];
  return sum;
}

// Function declaration; map method; Math.min; spread syntax
function sumTwoSmallestNumbers(numbers) {
  const numberArray = numbers.map((number) => number);
  const firstSmallest = Math.min(...numberArray);
  numberArray.splice(numberArray.indexOf(firstSmallest), 1);
  const secondSmallest = Math.min(...numberArray);
  console.log(numbers);
  return firstSmallest + secondSmallest;
}
