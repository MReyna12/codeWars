// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Function expression; join method
const binaryArrayToNumber = (arr) => {
  const string = arr.join("");
  const integer = parseInt(string, 2);
  return integer;
};
