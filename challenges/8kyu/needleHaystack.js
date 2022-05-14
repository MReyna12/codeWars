//  Write a function findNeedle() that takes an array full of junk but containing one "needle"
//  After your function finds the needle it should return a message (as a string) that says:
//    "found the needle at position " plus the index it found the needle.

// Function declaration; findIndex method; template literal
function findNeedle(haystack) {
  const needleIndex = haystack.findIndex(element => element === 'needle');
  return `found the needle at position ${needleIndex}`;
}


// Function expression; findIndex method; template literal
const findNeedle = haystack => {
  const needleIndex = haystack.findIndex(element => element === 'needle');
  return `found the needle at position ${needleIndex}`;
}

// Function declaration; indexOf method; tempalte literal
function findNeedle(haystack) {
  const needleIndex = haystack.indexOf('needle');
  return `found the needle at position ${needleIndex}`;
}