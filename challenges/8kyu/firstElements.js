function first(arr, n) {
  let firstElements = [];
  if (arr.length === 0) return firstElements;

  if (n === undefined) {
    firstElements = [arr[0]];
  } else {
    firstElements = arr.slice(0, n);
  }

  return firstElements;
}
