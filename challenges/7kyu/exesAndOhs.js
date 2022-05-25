//  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//P: string
//R: return true or false
//E: 'ooxx' // true 'xooxx' // false 'ooxXm' // true 'zpzpzpp' // true (no x and o equates to true)
//P: split method to put each letter in an array; forEach method and add to counter variable for xs and os; if two counters are equal then true else false

// function declaration; forEach method; split method; conditional
function XO(str) {
  let numberOfX = 0;
  let numberOfO = 0;
  const lowercaseString = str.toLowerCase();
  const array = lowercaseString.split("");
  array.forEach((letter) => {
    if (letter === "x") {
      numberOfX += 1;
    } else if (letter === "o") {
      numberOfO += 1;
    }
  });
  return numberOfX === numberOfO;
}

// function declaration; for loop; conditional
function XO(str) {
  let numberOfX = 0;
  let numberOfO = 0;
  const lowercaseString = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (lowercaseString[i] === "x") {
      numberOfX++;
    } else if (lowercaseString[i] === "o") {
      numberOfO++;
    }
  }
  return numberOfX === numberOfO;
}
