//  It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//  Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//  If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//  Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

//P: integer and boolean
//R: If bonus true, then salary x 10 and return that sum with euro symbol appended. If bonus false, then return current salary with euro symbol appended. Return value is a string.
//E: (10000, true) // 'euro sign100000'
//P: Ternary operator - if bonus then bonus else salary

// Function declaration; ternary operator
function bonusTime(salary, bonus) {
  const bonusAmount = salary * 10;
  return bonus ? `\u00A3${bonusAmount}` : `\u00A3${salary}`;
}

// Function expression; ternary operator
const bonusTime = (salary, bonus) => {
  const bonusAmount = salary * 10;
  return bonus ? `\u00A3${bonusAmount}` : `\u00A3${salary}`;
};
