// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// Function declaration; arrow function; reduce method
function getAverage(marks) {
  return Math.floor(
    marks.reduce((acc, current) => (acc += current)) / marks.length
  );
}

// Function expression; arrow function; reduce method
const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, current) => (acc += current)) / marks.length);

// Function declaration; for loop
function getAverage(marks) {
  let grades = 0;
  for (let i = 0; i < marks.length; i++) {
    grades += marks[i];
  }
  return Math.floor(grades / marks.length);
}
