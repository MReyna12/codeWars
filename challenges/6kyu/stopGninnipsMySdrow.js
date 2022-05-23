//  Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
//  Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//P: string (at least one word, but potentially more than one)
//R: a string; if any word within the string has five or more letters, then reverse the letters in said words; otherwise return the words in their original order
//E: 'Welcome' // 'emocleW'; 'Hey fellow warriors' // 'Hey wollef sroirraw'
//P: create a variable with an empty string value; for loop with two counters, one that goes up and one that goes down each loop?; conditional to handle word length

// Function declaration; short version for codeWars
function spinWords(string) {
  return string
    .split(" ")
    .map(function (word) {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

// Function declaration; readable version; map method; split method; reverse method; join method
function spinWords(string) {
  let stringArray = string.split(" ");
  let newArray = stringArray.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  let newString = newArray.join(" ");
  return newString;
}
