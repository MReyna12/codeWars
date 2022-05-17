//  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character.
//  If the word's length is even, return the middle 2 characters.
//  A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
//  You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// Function declaration; slice and charAt methods
function getMiddle(s) {
  let middleResult = "";
  const middleIndex = s.length / 2;
  if (s.length % 2 === 0) {
    const firstMiddleIndex = middleIndex - 1;
    const secondMiddleIndex = middleIndex + 1;
    const twoLetters = s.slice(firstMiddleIndex, secondMiddleIndex);
    middleResult += twoLetters;
  } else {
    const oneLetter = s.charAt(middleIndex);
    middleResult += oneLetter;
  }
  return middleResult;
}
