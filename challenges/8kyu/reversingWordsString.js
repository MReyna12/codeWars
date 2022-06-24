function reverse(string) {
  const array = string.split(" ");
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  const reverseString = reverseArray.join(" ");
  return reverseString;
}
