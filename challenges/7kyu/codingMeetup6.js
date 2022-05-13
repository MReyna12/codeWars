//  You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return either:
//    true if all developers in the list code in the same language; or
//    false otherwise.
//  The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S' 

//P: array of objects
//R: return true if the value of each language in each object within the array is the same otherwise return false
//E: isSameLanguage([{language: 'JavaScript'}, {language: 'JavaScript'}]) // true; isSameLanguage([{language: 'JavaScript'}, {language:'JavaScript'}, {language:'Python'}]) // false
//P: every method; for loop with a conditional inside to check if the value in the every method is equal to the value in the for loop or easier way is every method that checks if each parameter.language within every is === to the first object's language

// Function declaration; forEach method; for loop; conditional
function isSameLanguage(list) {
  let falseNumber = 0;
  list.forEach(developer => {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].language, developer.language)
      if (developer.language !== list[i].language) {
        falseNumber += 1;
      };
    }
  });
  return falseNumber > 0 ? false : true
}

// Function declaration; every method
function isSameLanguage(list) {
  return list.every(developer => developer.language === list[0].language);
}