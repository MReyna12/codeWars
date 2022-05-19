//  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//  Note: If the number is a multiple of both 3 and 5, only count it once.

//P: an integer (can be positive or negative)
//R: Return the sum of the numbers below the number given via the argument that are multiples of 3 or 5; if a multiple of 3 and 5, then only count the number once
//E: Number entered is 10, then we should count 3, 5, 6, 9 for a total of 23; if number is -15, then return 0; if number is 30, then we should count 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27 for sum of 195
//P: create a sum variable equal to 0; for loop with conditionals for negative number (return 0 if negative) and numbers divisible by 3 and 5, then 3, and then 5; return sum assuming not negative

// Function declaration; for loop; conditional
function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    } else if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Function expression; for loop; conditional; OR operator
const solution = (number) => {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
