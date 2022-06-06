function dutyFree(normPrice, discount, hol) {
  const percent = discount / 100;
  const savingsPerBottle = normPrice * percent;
  const bottlesToPurchase = Math.floor(hol / savingsPerBottle);
  return bottlesToPurchase;
}