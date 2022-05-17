// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// Function declaration; if/else if statements
function getGrade(s1, s2, s3) {
  const averageGrade = (s1 + s2 + s3) / getGrade.length;
  let letterGrade = "";
  if (averageGrade < 60) {
    letterGrade = "F";
  } else if (averageGrade < 70) {
    letterGrade = "D";
  } else if (averageGrade < 80) {
    letterGrade = "C";
  } else if (averageGrade < 90) {
    letterGrade = "B";
  } else {
    letterGrade = "A";
  }
  return letterGrade;
}
