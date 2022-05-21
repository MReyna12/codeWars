//  Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
//  You may consider that there will not be any empty arrays/vectors.

// Function expression; math.min/max functions; spread syntax
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Function expression; reduce method
const min = (list) =>
  list.reduce((previousVal, currentVal) => Math.min(previousVal, currentVal));
const max = (list) =>
  list.reduce((previousVal, currentVal) => Math.max(previousVal, currentVal));
