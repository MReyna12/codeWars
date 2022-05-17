//  You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  write a function that returns the average age of developers (rounded to the nearest integer).

//P: array of objects are being taken in--these objects contain various pieces of information about the developers
//R: return value should be the average age of the developers (rounded to the nearest integer)
//E: if we have two ages, 30 and 70, we should get a return value of 50
//P: Use the reduce method to add all of the ages together and then use Math.round to round said number to the nearest integer

// Function declaration
function getAverageAge(list) {
  let divisor = list.length;
  let sumOfAges;
  list.reduce((acc, devAge) => {
    sumOfAges = acc + devAge.age;
    return sumOfAges;
  }, 0);
  return Math.round(sumOfAges / divisor);
}
