// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. 
// Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates. 
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value. 

// Function declaration; for loop; push method
function pipeFix(numbers) {
  let array = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    array.push(i);
  }
  return array;
}

// Function expression; arrow function; for loop; push method
const pipeFix = numbers => {
  let array = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    array.push(i);
  }
  return array;
}