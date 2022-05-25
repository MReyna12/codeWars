//  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
//  If the two numbers are equal return a or b.
//  a and b are not ordered

//P: two integers (positive or negative)
//R: sum of all integers between and including the two input integers
//E: (1, 0) // 1; (-1, 2) // 2
//P: Since they two inputs are not ordered, use Math.min to find lowest and Math.max to find the highest; for loop starting from lowest until and including highest; add to sum variable

// Function declaration
function getSum(a, b) {
  if (a === b) {
    return a;
  }
  const lowestNum = Math.min(a, b);
  const highestNum = Math.max(a, b);
  let sum = 0;
  for (let i = lowestNum; i <= highestNum; i++) {
    sum += i;
  }
  return sum;
}
