// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  return string.split(" ");
}

// The function will turn the string into substrings and place the substrings in an array.
// The pattern in which the string shall be separated by is a space (as identified in the parenthesis of the .split method).

// The same function written as an arrow function.

const stringToArray = (string) => string.split(" ");
