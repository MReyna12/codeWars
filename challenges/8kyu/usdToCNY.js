function usdcny(usd) {
  const cny = (usd * 6.75).toFixed(2);
  const cnyString = `${cny} Chinese Yuan`;
  return cnyString;
}
