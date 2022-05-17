// Complete the solution so that it reverses the string passed into it

// The first function does the following:
// 1. turns the string into an array.
// 2. reverses the order of the elements of the newly created array.
// 3. turns the reversed array back into a string and returns the now reversed string.

function solution(str) {
  let array = str.split("");
  let reversedArray = array.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

// The second function does the following:
// 1. declares a variable with an empty string.
// 2. loops through the string, starting on the right end of the string and ending on the left end of the string.
// 3. after each loop, beginning with the last character of the string, the characters are added to the previously empty string in reverse.
// 4. Once the loop is complete the reversed string is returned.

function solutionTwo(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
