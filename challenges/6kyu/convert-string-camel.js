// P: string with dashes and/or underscores
// R: if first letter of first word is not capitalized, return the words in camel case. If first letter of first word is capitalized, return the words in pascal case.
// E: the-chicken-man // theChickenMan; The_Dog_Man // TheDogMan
// P: Put each word into an array, without the - or _. If first letter of first word === toUpperCase, then pascal; otherwise, camelCase

function toCamelCase(str) {
  if (str.length === 0) return str;

  let arrayOfStrings;

  if (str.includes("-")) {
    arrayOfStrings = str.split("-");
  } else if (str.includes("_")) {
    arrayOfStrings = str.split("_");
  }

  // capitalize the first letter of each word after the first word
  for (let i = 1; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] =
      arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1);
  }

  const revisedString = arrayOfStrings.join("");

  return revisedString;
}
