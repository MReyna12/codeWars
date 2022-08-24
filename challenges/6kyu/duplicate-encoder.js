// P: String of characters
// R: A string where each character in the new string is "(" if that character only appears once in the original string, or ")" if it appears more than once in the original string. Ignore capitalization.
// E: "din" // "((("; "diin" "())("
// P: Add each character to an object and a value that tracks total number of times it appears; then loop through the object and check if a key has a value greater than 1 and add the corresponding parenthesis to a string

function duplicateEncode(word) {
  const characterObject = {};

  const lowerCaseCharacters = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let character = lowerCaseCharacters[i];
    characterObject[character]
      ? characterObject[character]++
      : (characterObject[character] = 1);
  }

  let parenthesisString = "";

  for (const character of lowerCaseCharacters) {
    if (characterObject[character] > 1) {
      parenthesisString += ")";
    } else {
      parenthesisString += "(";
    }
  }

  return parenthesisString;
}
