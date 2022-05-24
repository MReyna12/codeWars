//  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
//  Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
//  For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//  Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//P: string of words
//R: return new string with the first letter of each word capitalized
//E: 'my name is jaden smith' // 'My Name Is Jaden Smith'
//P: use split method to put each word into an array; use map method to turn the first letter of each word to uppercase and add the rest of the word to the uppercase letter; use the join method to turn back into a sentence string

// Function declaration; split method; map method; join method
String.prototype.toJadenCase = function () {
  const arrayOfStrings = this.split(" ");
  const jadenArray = arrayOfStrings.map((word) => {
    return word ? word[0].toUpperCase() + word.substring(1) : "";
  });
  const jadenString = jadenArray.join(" ");
  return jadenString;
};
