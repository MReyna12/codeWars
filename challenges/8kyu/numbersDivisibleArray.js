//  Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
//  First argument is an array of numbers and the second is the divisor.


// Function declaration; for loop; push method
function divisibleBy(numbers, divisor) {
  let divisibleArray = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? divisibleArray.push(numbers[i]) : divisibleArray;
  }
  return divisibleArray;
}

// Function declaration; filter method
function divisibleBy(numbers, divisor) {
  return numbers.filter(num => num % divisor === 0);
}