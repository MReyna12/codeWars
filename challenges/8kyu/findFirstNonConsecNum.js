//  Your task is to find the first element of an array that is not consecutive.
//  By not consecutive we mean not exactly 1 larger than the previous element of the array.
//  If the whole array is consecutive then return null
//  he array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

//P:  array of integers which can be negative or positive
//R:  first non-consecutive integer (meaning next integer is not exactly +1); if all consecutive, then return null
//E:  [1,2,4] // 4
//P:  for loop beginning at 1, with conditional that subtracts 1 from the index so you can compare first index (0) to the value in the next index;

// Function declaration; for loop; conditional
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  return null;
}

// Function declaration; find method; ternary operator
function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0]);
  return result ? result : null;
}
