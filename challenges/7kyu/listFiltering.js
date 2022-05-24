//  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//P: array of non-negative integers and strings
//R: return only the integers in a new array
//E: [1, 2, 'fww', 'ewrwfw', 5] // [1, 2, 5]
//P: use filter with a test that determines if each element passed through the the filter method is a number

// Function declaration; filter method; Number method
function filter_list(l) {
  const arrayNums = l.filter((element) => Number.isInteger(element));
  return arrayNums;
}

// Function declaration; filter method; typeof operator
function filter_list(l) {
  const arrayNums = l.filter((element) => typeof element !== "string");
  return arrayNums;
}
