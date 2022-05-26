//  In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
//  How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//  the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//  aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
//  Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//P: four parameters; p0 is the population beginning in year one; percent is the percent the population grows each year; aug is the inhabitants per year that come to live in the town; and p us popluation to surpass; p0/p are positive integers; aug is integer; percent is positive or null floating number
//R: return a number (number of years needed to equal or exceed p)
//E: (1500, 5, 100, 5000) // 15 years to surpass
//P: variable to convert percentage  = percent * 100; variable for totalYears set to zero; for loop until p0 > p; math.floor to handle floats

// Function declaration
function nbYear(p0, percent, aug, p) {
  const percentage = percent * 0.01;
  for (let totalYears = 0; p0 < p; totalYears++) {
    p0 += Math.floor(p0 * percentage + aug);
  }
  return totalYears;
}
