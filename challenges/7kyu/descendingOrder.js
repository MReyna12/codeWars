//  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//P: non-negative integer
//R: return integer; input integer must be rearranged so the numbers are in descending order
//E: 1234 // 4321
//P: to string; then array; sort; join the sorted array; turn value back into numbers; return number variable

// Function declaration; toString; split method; sort method; join method; Number
function descendingOrder(n) {
  const string = n.toString();
  const arrayString = string.split("");
  const sortedArray = arrayString.sort((a, b) => b - a);
  const sortedString = sortedArray.join("");
  const highestNumber = Number(sortedString);
  return highestNumber;
}

// Same as above, but in less steps
function descendingOrder(n) {
  const arrayOfNumbers = Array.from(String(n), Number);
  const sortedArray = arrayOfNumbers.sort((a, b) => b - a);
  const highestNumber = Number(sortedArray.join(""));
  return highestNumber;
}
