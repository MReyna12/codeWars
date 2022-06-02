function twoSort(s) {
  const sortedArray = s.sort();
  const firstValue = sortedArray[0];
  let newString = "";
  for (let i = 0; i < firstValue.length; i++) {
    if (firstValue[i] === firstValue[firstValue.length - 1]) {
      newString += firstValue[i];
    } else {
      newString += `${firstValue[i]}***`;
    }
  }
  return newString;
}
