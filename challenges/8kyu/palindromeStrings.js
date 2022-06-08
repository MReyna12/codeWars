function isPalindrome(line) {
  const convertToString = line.toString();
  let reversedString = "";

  for (let i = convertToString.length - 1; i >= 0; i--) {
    reversedString += convertToString[i];
  }

  return convertToString === reversedString;
}
