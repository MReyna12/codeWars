//  A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//  Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
//  Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

//P: non-zero integers
//R: true or false depending upon whether the given number is a Narcissistic number in base 10.
//E: 153 - 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153 // true; 12 - 1^2 + 2^2 = 1 + 4 = 5 // false
//P: declare three variables; first is sum set to 0, next is converting the number value to a string value, and finally the length of the string multipled by 1 to get the power of the number of digits;
// for loop which will add the result of each digit to the applicable power to the sum; and then check to see if sum is equal to the argument provided

function narcissistic(value) {
  let sum = 0;
  const valueString = value.toString();
  const power = valueString.length * 1;
  for (let i = 0; i < valueString.length; i++) {
    sum += Math.pow(valueString[i], power);
  }
  return sum === value;
}
