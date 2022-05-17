// Write a function called repeatStr which repeats the given string string exactly n times.

// Function declaration
function repeatStr(n, s) {
  return s.repeat(n);
}

// Function declaration/for loop
function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// Function expression/arrow function/for loop
const repeatStr = (n, s) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
};
