//  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//  It should remove all values from list a, which are present in list b keeping their order.
//  If a value is present in b, all of its occurrences must be removed from the other

//P: two arrays with integers
//R: subtract similar integers from each array and return only the integers that are not similar between the two (return value is an array)
//E: ([1. 2], [2]) // 1
//P: conditional to check if an array is empty; if neither array is empty; then use filter method, with a test to see if the other array includes the number from the first array

function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a;
  }
  let newArray = a.filter((number) => !b.includes(number));
  return newArray;
}
