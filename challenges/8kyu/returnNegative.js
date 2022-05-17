// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Function declaration/if else conditional statement
function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return num * -1;
  }
}

// Function declaration/ternary operator
function makeNegative(num) {
  return num <= 0 ? num : num * -1;
}

// Function expression/arrow function/ternary operator
const makeNegative = (num) => (num <= 0 ? num : num * -1);
