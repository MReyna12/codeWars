function powersOfTwo(n) {
  let powers = [];
  for (let i = 0; i <= n; i++) {
    powers.push(2 ** i);
  }
  return powers;
}
