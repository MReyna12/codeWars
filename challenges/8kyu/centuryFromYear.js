//  The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//  Given a year, return the century it is in.

// Function declaration; conditional; math.floor function
function century(year) {
  let centuryResult = 0;
  if (year <= 100) {
    centuryResult = 1;
  } else if (year % 100 === 0) {
      centuryResult = (year / 100);
  } else {
      centuryResult = Math.floor(year / 100) + 1;
    }
  return centuryResult;
}

// Function declaration; math.ceil function; one-liner for Codewars
function century(year) {
  return Math.ceil(year/100);
}