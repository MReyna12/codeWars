// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// Let's assume that all numbers in the input will be integer values.

// Function declaration; turn any negative integers into positives; toString/split/reduce methods
function sumDigits(number) {
  const positiveNumber = Math.abs(number);
  const arrayOfStringDigits = positiveNumber.toString().split("");
  const sum = arrayOfStringDigits.reduce(
    (acc, currentVal) => acc + Number(currentVal),
    0
  );
  return sum;
}
