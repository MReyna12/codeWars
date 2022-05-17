//  Given an array of integers, find the one that appears an odd number of times.
//  There will always be only one integer that appears an odd number of times.

// Function declaration; for loop; filter method; conditional
function findOdd(array) {
  for (let i = 0; i < array.length; i++) {
    const totalCount = array.filter((number) => number === array[i]).length;
    console.log(totalCount);
    if (totalCount % 2 === 1) {
      return array[i];
    }
  }
}

// Function declaration; forEach method; ternary operator; key value pairs
function findOdd(array) {
  const obj = {};
  array.forEach((number) => (obj[number] ? obj[number]++ : (obj[number] = 1)));
  console.log(obj);
  for (const property in obj) {
    if (obj[property] % 2 === 1) {
      return Number(property);
    }
  }
}
