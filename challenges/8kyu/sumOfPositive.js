// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    if (currentValue >= 0) {
      return previousValue + currentValue;
    }
    return previousValue;
  }, 0);
}

// Also written as a function expression, with a ternary conditional operator
/*const positiveSum = arr => arr.reduce((previousValue, currentValue) => currentValue >= 0 ? previousValue + currentValue : currentValue, 0)*/