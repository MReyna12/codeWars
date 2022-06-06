function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      newArr.push(Math.sqrt(array[i]));
    } else {
      newArr.push(array[i] * array[i]);
    }
  }
  return newArr;
}