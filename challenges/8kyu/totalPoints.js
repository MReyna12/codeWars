// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// Function declaration; forEach method; if else/else if
function points(games) {
  let sum = 0;
  games.forEach((element) => {
    let value1 = Number(element[0]);
    let value2 = Number(element[2]);
    if (value1 > value2) {
      sum += 3;
    } else if (value1 < value2) {
      sum += 0;
    } else if (value1 == value2) {
      sum += 1;
    }
  });
  return sum;
}

// Function declaration; for loop; if else/else if
function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    let value1 = Number(games[i][0]);
    let value2 = Number(games[i][2]);
    if (value1 > value2) {
      sum += 3;
    } else if (value1 < value2) {
      sum += 0;
    } else if (value1 == value2) {
      sum += 1;
    }
  }
  return sum;
}
