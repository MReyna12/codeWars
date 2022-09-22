function findAverage(nums) {
  const arrayLength = nums.length;

  const total = nums.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
  }, 0);

  const mean = total / arrayLength;

  return mean;
}

findAverage([1, 3, 5, 7]);
