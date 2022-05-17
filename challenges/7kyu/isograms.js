// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Function declaration; for loop; sort method
function isIsogram(str) {
  let sortedString = str.toLowerCase().split("").sort().join("");
  for (let i = 0, j = 1; i < sortedString.length; i++, j++) {
    if (sortedString[i] === sortedString[j]) {
      return false;
    }
  }
  return true;
}
