//  Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//  The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//  If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//P: array of negative and positive integers
//R: add the integers together, except for the lowest and highest integer; reutnr value is a number
//E: [1. 2. 3. 4. 5] // 9
//P: conditional to check for value of input; Math.min/max to get lowest and highest integers; reduce method to total all numbers; sum variable with value of total of all numbers minus the smallest and largest integer.

// Function declaration; conditonal; Math.min/max; reduce method
function sumArray(array) {
  if (array === null || array === undefined || array.length < 3) {
    return 0;
  }
  const smallestInteger = Math.min(...array);
  const largestInteger = Math.max(...array);
  const totalOfNums = array.reduce((acc, currentNum) => acc + currentNum, 0);
  const sum = totalOfNums - smallestInteger - largestInteger;
  return sum;
}

// Function declaration; conditonal; sort method; for loop; reduce method
function sumArray(array) {
  if (array === null || array === undefined || array.length < 3) {
    return 0;
  }
  let fixedArray = [];
  let sortedArray = array.sort((a, b) => a - b);
  for (let i = 1; i < array.length - 1; i++) {
    fixedArray.push(sortedArray[i]);
  }
  const sum = fixedArray.reduce((acc, currentNum) => acc + currentNum, 0);
  return sum;
}
