//  This time no story, no theory. The examples below show you how to write function accum:
//    accum("abcd") -> "A-Bb-Ccc-Dddd"
//    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//    accum("cwAt") -> "C-Ww-Aaa-Tttt"
//  The parameter of accum is a string which includes only letters from a..z and A..Z.

//P: string of letters
//R: return string of letters with hyphen between each new letter; each letter increases by the number of its order
//E: 'abcd' // A-Bb-Ccc-Dddd
//P: split method to get each letter separate in an array; use map and repeat method based on order of letters(?) to create array with new strings; join method with hypen for the correct string

// Function declaration
function accum(string) {
  const arrayOfStrings = string.split("");
  const revisedStringsArray = arrayOfStrings.map((letter, index) => {
    if (index === 0) {
      return letter[0].toUpperCase();
    } else if (index >= 1)
      return letter[0].toUpperCase() + letter.toLowerCase().repeat(index);
  });
  const revisedString = revisedStringsArray.join("-");
  return revisedString;
}

accum("ZpglnRxqenU");
