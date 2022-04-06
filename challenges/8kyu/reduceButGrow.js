// Given a non-empty array of integers, return the result of multiplying the values together in order. 

// Function declaration/arrow function
function grow(x) {
  return x.reduce((previous, current) => previous * current);
}

// Function expression/arrow function
const grow = x => x.reduce((previous, current) => previous * current);

// For loop
const grow = x => {
  let sum = 1;
  for (i = 0; i < x.length; i++) {
    sum *= x[i]
  }
  return sum;
}