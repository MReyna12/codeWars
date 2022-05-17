//  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//  All numbers are valid Int32, no need to validate them.
//  There will always be at least one number in the input string.
//  Output string must be two numbers separated by a single space, and highest number is first.

// Function declaration; split method; sort method
function highAndLow(numbers) {
  const array = numbers.split(" ");
  const sortedArray = array.sort((a, b) => a - b);
  const lowestNumber = Number(sortedArray[0]);
  const highestNumber = Number(sortedArray[sortedArray.length - 1]);
  return `${highestNumber} ${lowestNumber}`;
}

// Function declaration; split method; spread syntax; Math.min and Math.max to obtain the lowest and highest number in the array
function highAndLow(numbers) {
  const array = numbers.split(" ");
  const lowestNumber = Math.min(...array);
  const highestNumber = Math.max(...array);
  return `${highestNumber} ${lowestNumber}`;
}
