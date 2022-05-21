//  Given an array of integers.
//  Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//  If the input is an empty array or is null, return an empty array.

//P: array of integers, both positive and negative (zero does not count as positive or negative)
//R: return an array, with first element being the total number of positive numbers in the array and second being the sum of negative numbers; however, if an empty array or input is null, return empty array
//E: [1, 2, 3, 4, 5, -10] // [5. -10]
//P: create empty array variable; conditional to check if input is null or 0; variables for a filtered array of positive integers and then negative integers; variables for length of positive integers array and reduce on negative intgers; push results into empty array

// Function declaration; conditional; filter method; reduce method; push method
function countPositivesSumNegatives(input) {
  let array = [];
  if (input === null || input.length === 0) {
    return array;
  }
  const filteredPositives = input.filter((number) => number > 0);
  const filteredNegatives = input.filter((number) => number < 0);
  const numberOfPositiveIntegers = filteredPositives.length;
  const totalOfNegativeNums = filteredNegatives.reduce(
    (sum, currentVal) => sum + currentVal,
    0
  );
  array.push(numberOfPositiveIntegers, totalOfNegativeNums);
  return array;
}

// Function declaration; conditionals; forEach method; push method
function countPositivesSumNegatives(input) {
  let numberOfPositiveIntegers = 0;
  let totalOfNegativeNums = 0;
  let array = [];
  if (input === null || input.length === 0) {
    return array;
  }
  input.forEach((number) => {
    if (number > 0) {
      numberOfPositiveIntegers++;
    } else if (number < 0) {
      totalOfNegativeNums += number;
    }
  });
  array.push(numberOfPositiveIntegers, totalOfNegativeNums);
  return array;
}
