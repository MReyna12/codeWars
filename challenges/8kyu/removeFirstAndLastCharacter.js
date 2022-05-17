// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

// The beginningIndex will start the slice after the first character.
// The endIndex will end the slice on the last character (number of characters minus the negative number), which is excluded.
