// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Function declaration
function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

// Function expression; arrow function
const getCount = (str) => {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.includes("a") ||
      str.includes("e") ||
      str.includes("i") ||
      str.includes("o") ||
      str.includes("u")
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
