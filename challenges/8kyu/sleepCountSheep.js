// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

// Function expression; arrow function; for loop; push and join methods
const countSheep = num => {
  let array = [];
  for(let i = 1; i <= num; i++) {
    array.push(`${i} sheep...`);
  }
  return array.join('');
}

// Function declaration; for loop; push and join methods
function countSheep(num) {
  let array = [];
  for(let i = 1; i <= num; i++) {
    array.push(`${i} sheep...`);
  }
  return array.join('');
}

// Functon declaration; for loop; empty string

function countSheep(num) {
  let string = '';
  for (let i = 1; i <= num; i++) {
    string += `${i} sheep...`;
  }
  return string;
}