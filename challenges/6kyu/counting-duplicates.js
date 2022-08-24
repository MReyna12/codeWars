// P: String with letters and numeric digits
// R: Total number of distinct case-insensitive alphabetic characters and numeric digits that occur more than once
// E: 'Hello' // 1 (two ls); 'abcd' // 0
// P: Add each letter/number to object; if it doesn't exist in said object, set value to 1. If it does exist in said object, increase value by 1.
//    Then check if there are any values in the object greater than 1, if so return the total count that meet said requirement.

function duplicateCount(text) {
  if (text.length === 0) return 0;

  const textObject = {};
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const character = text[i].toLowerCase();
    if (textObject[character]) {
      textObject[character] += 1;
    } else {
      textObject[character] = 1;
    }
  }

  for (const character in textObject) {
    if (textObject[character] > 1) count++;
  }

  return count;
}
