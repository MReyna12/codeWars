function arrayMadness(a, b) {
  let squaredTotal = 0;
  let cubedTotal = 0;
  for (let i = 0; i < a.length; i++) {
    squaredTotal += a[i] * a[i];
  }
  for (let j = 0; j < b.length; j++) {
    cubedTotal += b[j] * b[j] * b[j];
  }
  return squaredTotal > cubedTotal;
}

function arrayMadness(a, b) {
  let squaredTotal = a.reduce((acc, currentVal) => acc + currentVal ** 2, 0);
  let cubedTotal = b.reduce((acc, currentVal) => acc + currentVal ** 3, 0);
  return squaredTotal > cubedTotal;
}
