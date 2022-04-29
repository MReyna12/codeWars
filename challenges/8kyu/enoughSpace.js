//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
// With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
// He wants you to write a simple program telling him if he will be able to fit all the passengers.
// You have to write a function that accepts three parameters: 
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Function declaration; ternary operator
function enough(cap, on, wait) {
  return on + wait > cap ? (on + wait) - cap : 0;
}

// Function expression; arrow function; ternary operator
const enough = ((cap, on, wait) => on + wait > cap ? (on + wait) - cap : 0);