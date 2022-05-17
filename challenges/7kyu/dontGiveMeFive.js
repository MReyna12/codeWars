//  In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
//  The start and the end number are both inclusive!
//  The result may contain fives.
//  The start number will always be smaller than the end number. Both numbers can be also negative!

// function declaration
function dontGiveMeFive(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = String(i).includes("5") ? sum : sum + 1;
  }
  return sum;
}
