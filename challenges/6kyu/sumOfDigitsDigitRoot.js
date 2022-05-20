//  Digital root is the recursive sum of all the digits in a number.
//  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//P: non-negative integer
//R: single digit integer
//E: 942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6 // 6
//P: declare sum variable equal to 0; for loop to go through each digit and add them up and put result in sum; if the length of sum is greater than one then for loop again until sum equals one digit; return sum

// Function declaration; while loop; split method; reduce method
function digital_root(n) {
  let sum = n;
  let array = [];

  while (sum > 9) {
    array = sum.toString().split("");
    sum = array.reduce(
      (previous, currentVal) => Number(previous) + Number(currentVal),
      0
    );
  }
  return sum;
}

// Function declaration; conditional; for loop
function digital_root(n) {
  if (n < 10) {
    return n;
  }
  let sum = 0;
  const numString = n.toString();
  for (let i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }
  return digital_root(sum);
}
