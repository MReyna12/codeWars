function generateRange(min, max, step) {
  let rangeArray = [];
  for (let i = min; i <= max; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}
