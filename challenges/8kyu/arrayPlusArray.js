// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// Function declaration; concat method; arrow function; reduce method
function arrayPlusArray(arr1, arr2) {
  const arrays = arr1.concat(arr2);
  const sum = arrays.reduce((acc, current) => acc + current, 0);
  return sum;
}
// Function declaration; one-liner; concat method; arrow function; reduce method
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, current) => acc + current, 0);
}

// Function expression; concat method; arrow function; reduce method
const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((acc, current) => acc + current, 0);

// Function declaration (similar to above, but reduce the arrays separately)
function arrayPlusArray(arr1, arr2) {
  const sumOfArray1 = arr1.reduce((acc, current) => acc + current, 0);
  const sumOfArray2 = arr2.reduce((acc, current) => acc + current, 0);
  const sumOfArrays = sumOfArray1 + sumOfArray2;
  return sumOfArrays;
}
