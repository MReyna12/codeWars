function stringy(size) {
  let binaryString = "";
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 1) {
      binaryString += 1;
    } else {
      binaryString += 0;
    }
  }
  return binaryString;
}
