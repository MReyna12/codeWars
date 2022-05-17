//  You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return:
//    true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
//    false otherwise.
//  Age is represented by a number which can be any positive integer up to 199.

//P: The parameter is an array of objects which contain key/value pairs for developers.
//R: Return true if the following age groups are all represented in the array of objects: teen, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
//E: [{age: 19}, {age: 20}, {age: 30}, {age: 40}, {age: 50}, {age: 60}, {age: 70}, {age: 80}, {age: 90}, {age: 100}] // true; [{age: 19}] // false
//P: declare variables for each age group and set their values to zero; forEach method on the array that checks if the developer ages are >= the ranges and sets the values to one for the applicable age range
//if all age ranges = 1 then return true otherwise return false

//  Function declaration; forEach method; conditionals
function isAgeDiverse(list) {
  let teens = 0;
  let twenties = 0;
  let thirties = 0;
  let fourties = 0;
  let fifties = 0;
  let sixties = 0;
  let seventies = 0;
  let eighties = 0;
  let nineties = 0;
  let centenarian = 0;
  list.forEach((developer) => {
    if (developer.age >= 100) {
      centenarian = 1;
    } else if (developer.age >= 90) {
      nineties = 1;
    } else if (developer.age >= 80) {
      eighties = 1;
    } else if (developer.age >= 70) {
      seventies = 1;
    } else if (developer.age >= 60) {
      sixties = 1;
    } else if (developer.age >= 50) {
      fifties = 1;
    } else if (developer.age >= 40) {
      fourties = 1;
    } else if (developer.age >= 30) {
      thirties = 1;
    } else if (developer.age >= 20) {
      twenties = 1;
    } else if (developer.age >= 13) {
      teens = 1;
    }
  });
  if (
    teens === 1 &&
    twenties === 1 &&
    thirties === 1 &&
    fourties === 1 &&
    fifties === 1 &&
    sixties === 1 &&
    seventies === 1 &&
    eighties === 1 &&
    nineties === 1 &&
    centenarian === 1
  ) {
    return true;
  } else {
    return false;
  }
}
