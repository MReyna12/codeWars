function differenceInAges(ages) {
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);
  const ageDifference = oldest - youngest;
  const youngOldArray = [];
  youngOldArray.push(youngest, oldest, ageDifference);
  return youngOldArray;
}
