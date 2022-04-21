// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. 
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.

// Function declaration; nested ternary operator
function updateLight(current) {
  return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

// Function declaration; if/else if statements
function updateLight(current) {
  let lightColor = '';
  if (current === 'green') {
    lightColor = 'yellow';  
  } else if (current === 'yellow') {
      lightColor = 'red';
  } else {
      lightColor = 'green';
  }
  return lightColor;
}