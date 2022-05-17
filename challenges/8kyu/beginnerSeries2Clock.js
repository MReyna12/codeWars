// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Function declaration
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
