//  You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return an array where each object will have a new property 'greeting' with the following string value:
//  Hi < firstName here >, what do you like the most about < language here >?
//  The order of the properties in the objects does not matter (except in COBOL).
//  The input array will always be valid and formatted as in the example above.

//  Function declaration; forEach method
function greetDevelopers(list) {
  list.forEach((developer) => {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  return list;
}

// Function declaration; map method
function greetDevelopers(list) {
  list.map((developer) => {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  return list;
}
