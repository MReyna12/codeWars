//  Given an integral number, determine if it's a square number
//  The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// function declaration; for loop
function isSquare(n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}

// Function declaration; Math.sqrt()
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
