// Remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  let array = x.split(" ");
  let removedSpaceText = array.join("");
  return removedSpaceText;
}

// Removed the space within the string with .split(' ') and created an array. Placed the newly created array into a variable.
// Turned the variable array into a string with .join('') and placed it into the variable removedSpaceText.
