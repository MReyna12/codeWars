// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Function declaration; reduce method
function findShort(s) {
  return s.split(' ').reduce((acc, current) => acc.length < current.length ? acc : current).length;
}

// Function expression; arrow function; reduce method
const findShort = s => s.split(' ').reduce((acc, current) => acc.length < current.length ? acc : current).length;

// Function declaration; arrow function; sort method
function findShort(s) {
  let sortedArray = s.split(' ').sort((a, b) => a.length - b.length);
  return sortedArray[0].length;
}

// Function expression; arrow function; reduce method
const findShort = s => {
  let sortedArray = s.split(' ').sort((a, b) => a.length - b.length);
  return sortedArray[0].length;
}