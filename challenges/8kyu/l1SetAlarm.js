//  Write a function named setAlarm which receives two parameters.
//  The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//  The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm).
//  It should return false otherwise.

//P: two params// both booleans
//R: if first param true and second param false then return true; otherwise return false
//E: true, true // false; true, false // true; false, true // false
//P: return if employed truthy and vacation falsy

// function declaration
function setAlarm(employed, vacation) {
  return employed && !vacation;
}
