function isPalindrome(x) {
  let lowerCaseX = x.toLowerCase();
  let reversedString = '';
  for (let i = x.length - 1; i >= 0; i--) {
    reversedString += x[i].toLowerCase();
  }
  return lowerCaseX === reversedString
}
