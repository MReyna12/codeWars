// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Function declaration/arrow function
function fakeBin(x) {
  return x
    .split("")
    .map((num) => (num <= 4 ? 0 : 1))
    .join("");
}

// Function expression/arrow function
let fakeBin = (x) =>
  x
    .split("")
    .map((num) => (num <= 4 ? 0 : 1))
    .join("");

// For loop
function fakeBin(x) {
  let binaryString = "";
  for (i = 0; i < x.length; i++) {
    x[i] <= 4 ? (binaryString += "0") : (binaryString += "1");
  }
  return binaryString;
}
