//P: two strings that contain letters a to z
//R: the longest sorted string containing ONLY distinct letters taken from s1 and/or s2
//E
//P: Add s1 letters and count to an object. As s1 letters are added, check to see if value already exists, if it does, then add zero, and if it doesn't then add 1. Compare s2 to s1 and add 1 for non-existing letters and add zero for letters that
// already exist. Then add each letter from the object to a string. Sort the string. return the string.

function longest(s1, s2) {
  let distinctLetters = {};
  let distinctLettersArray = [];
  for (const letter of s1) {
    distinctLetters[letter]
      ? (distinctLetters[letter] += 0)
      : (distinctLetters[letter] = 1);
  }

  for (const letter of s2) {
    distinctLetters[letter]
      ? (distinctLetters[letter] += 0)
      : (distinctLetters[letter] = 1);
  }

  for (const property in distinctLetters) {
    distinctLettersArray.push(property);
  }
  const sortedArray = distinctLettersArray.sort();
  const distinctSortedString = sortedArray.join("");
  return distinctSortedString;
}
