//  Trolls are attacking your comment section!
//  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//  Your task is to write a function that takes a string and return a new string with all vowels removed.
//  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//  Note: for this kata y isn't considered a vowel.

//P: a string
//R: return a string with all vowels removed
//E: 'I love chicken' // lv chckn; 'Hello my name is Bob' // Hll my nm s bb
//P: for loop that loops through each character in the string; conditional if not vowel, then add character to new string

// Function declaration; for loop; conditional
function disemvowel(str) {
  let noVowelString = "";
  for (let i = 0; i < str.length; i++) {
    let lowerCaseCharacter = str[i].toLowerCase();
    if (
      lowerCaseCharacter !== "a" &&
      lowerCaseCharacter !== "e" &&
      lowerCaseCharacter !== "i" &&
      lowerCaseCharacter !== "o" &&
      lowerCaseCharacter !== "u"
    ) {
      noVowelString += str[i];
    }
  }
  return noVowelString;
}

// Function declaration; split method; forEach method; conditional
function disemvowel(str) {
  let noVowelArray = [];
  let arrayOfCharacters = str.split("");
  arrayOfCharacters.forEach((character) => {
    let lowerCaseCharacter = character.toLowerCase();
    if (
      lowerCaseCharacter !== "a" &&
      lowerCaseCharacter !== "e" &&
      lowerCaseCharacter !== "i" &&
      lowerCaseCharacter !== "o" &&
      lowerCaseCharacter !== "u"
    ) {
      noVowelArray.push(character);
    }
  });
  return noVowelArray.join("");
}

// Function declaration; vowels in an object; for loop; conditional
function disemvowel(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let noVowelString = "";
  for (let i = 0; i < str.length; i++) {
    let lowerCaseCharacter = str[i].toLowerCase();
    if (!vowels[lowerCaseCharacter]) {
      noVowelString += str[i];
    }
  }
  return noVowelString;
}

disemvowel("This website is for losers LOL!");
