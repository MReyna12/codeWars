//  Given the following input array:
/*    var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];*/
//  write a function that adds the username property to each object in the input array
//  The value of the username property is composed by concatenating:
//    firstName in lower-case;
//    first letter of the lastName in lower-case; and
//    the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.
//    Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time.
//    The example above assumes that the function is run in year 2020.
//  The input array will always be valid and formatted as in the example above.
//  Age is represented by a number which can be any positive integer.
//  Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
//  Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

//P: Taking in an array with two objects composed of key/value pairs related to a developer
//R: Return same objects, but with a username added for each; the username is written as firstName/firstletteroflastName/birthYear(calculated based on year at time of function running)
//E: see above
//P: create the following variables: first name(lowercase), last name first initial variable(lowercase), date for today (day of function being called), birth year which is the year of today minus the age of the developer, and the username
// run a forEach method on the array, with the variables going inside of the forEach method; create a username key via dot notation and set the key to the variable userName

//Function declaration; forEach method; dot notation to add new key to object
function addUsername(list) {
  list.forEach((developer) => {
    const firstName = developer.firstName.toLowerCase();
    const lastNameInitial = developer.lastName[0].toLowerCase();
    const today = new Date();
    const birthYear = today.getFullYear() - developer.age;
    const userName = `${firstName}${lastNameInitial}${birthYear}`;
    developer.username = userName;
  });
  return list;
}

//Function declaration; map method; dot notation to add new key to object
function addUsername(list) {
  return list.map((developer) => {
    const firstName = developer.firstName.toLowerCase();
    const lastNameInitial = developer.lastName[0].toLowerCase();
    const today = new Date();
    const birthYear = today.getFullYear() - developer.age;
    const userName = `${firstName}${lastNameInitial}${birthYear}`;
    developer.username = userName;
    return developer;
  });
}
