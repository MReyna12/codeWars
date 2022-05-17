//  write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins
//  The original order should be preserved.
//  If there are no GitHub admin developers in a given language then return an empty array [].
//  The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
//  The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

//P: Two parameters are being taken in--(1) an array of objects with developer information and (2) the language of the developer being requested
//R: Return one of two things: (1) if there is a githubAdmin AND they know the required language, then return an array with the developer object or (2) if there is no githubAdmin with the required language, or there is the required language, but no githubAdmin
//E: If language is JavaScript and two objects in the array have a language of JavaScript and are both githubAdmins, then return both objects in an array
//P: filter out the developer objects into an array if the above requirements are met

// Function declaration; filter method; comparison operator
function findAdmin(list, lang) {
  return list.filter(developer => developer.language === lang && developer.githubAdmin === 'yes');
}

// Function declaration; forEach method; comparison operator
function findAdmin(list, lang) {
  let newArray = [];
  list.forEach(developer => {
    if (developer.language === lang && developer.githubAdmin === 'yes') {
      newArray.push(developer);
    }
  });
  return newArray
}