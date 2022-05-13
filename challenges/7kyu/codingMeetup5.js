//  You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.
//  The order of the languages in the object does not matter. 
//  The count value should be a valid number.


//P(aramaters): an array of objects
//R(eturn): returning an OBJECT that includes the count of each coding language represented at the meetup
//E(xamples): countLanguages([{language: 'JavaScript'}]) // {JavaScript: 1}
//P(seudo Code): create an empty object; use forEach to go through each object within the array and check to see if the empty obj includes the language of each developer, 
//if not add the language and set its value to 1, if already included then add one to the value of said language

// Function declaration; forEach method; ternary operator
function countLanguages(list) {
  const numberOfLanguages = {};
  list.forEach(obj => numberOfLanguages[obj.language] ? numberOfLanguages[obj.language]++ : numberOfLanguages[obj.language] = 1);
  return numberOfLanguages;
}

// Function declaration; reduce method; conditional
function countLanguages(list) {
  return list.reduce((object, currentValue) => {
    if (currentValue.language in object) {
      object[currentValue.language]++;
    } else {
        object[currentValue.language] = 1;
    }
    return object;
  }, {});
}