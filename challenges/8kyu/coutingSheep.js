// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Function declaration/for loop
function countSheeps(arrayOfSheep) {
  let totalSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      totalSheep += 1;
    }
  }
  return totalSheep;
}

// Function expression/arrow function
const countSheeps = (arrayOfSheep) => {
  let totalSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      totalSheep += 1;
    }
  }
  return totalSheep;
};

// Function declaration/reduce method with ternary operator & short circuit evaluation
function countSheeps(arrayOfSheep) {
  let totalSheep = 0;
  return arrayOfSheep.reduce(
    (prev, current) =>
      prev === true || current === true ? (totalSheep += 1) : totalSheep,
    0
  );
}
