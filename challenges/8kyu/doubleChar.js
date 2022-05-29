//  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//function declaration
function doubleChar(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}
