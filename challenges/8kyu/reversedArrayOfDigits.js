// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Function declaration
function digitize(n) {
  let numberString = n.toString();
  let array = numberString.split("");
  let reversedString = array.reverse();
  let numberArray = reversedString.map(Number);
  return numberArray;
}

// Same as above but removed the variables

/*function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}*/

// Function expression/arrow function
let digitize = (n) => {
  let numberString = n.toString();
  let array = numberString.split("");
  let reversedString = array.reverse();
  let numberArray = reversedString.map(Number);
  return numberArray;
};

// Same as above but removed the variables

/*let digitize = n => n.toString().split('').reverse().map(Number);*/

// For loop
let numberArray = [];

function digitize(n) {
  let numberString = n.toString();
  let array = numberString.split("");
  for (let i = array.length - 1; i >= 0; i--) {
    numberArray.push(Number(array[i]));
  }
  return numberArray;
}
