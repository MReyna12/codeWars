// Nathan loves cycling. 
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// Function declaration
function litres(time) {
  return Math.floor(time * 1/2);
}

// Function expression/arrow function
const litres = time => Math.floor(time * 1/2);