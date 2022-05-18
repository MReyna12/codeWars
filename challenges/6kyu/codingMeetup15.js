//  write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number
//  Preserve the order of the original list.
//  Return an empty array [] if there is no developer with an "odd" name.

//P: an array of objects with various key/value pairs for the developer objects
//R: if the ASCII representation of the firstName of the developer objects in the aformentioned array equate to an odd number, then return those objects in an array; if none equate to an odd number, then return an empty array
//E:
//P: create an empty array variable; create a variable that will hold the sum of the ASCII conversion for each developer; create a variable that holds each dev first name; loop through each letter of the name variable and add that ASCII values
// created from the charCodeAt() method to the sum variable; conditional to determine which of the above values will be returned

// Function declaration; forEach method; for loop; conditional
function findOddNames(list) {
  let newArray = [];
  list.forEach((developer) => {
    let devASCII = 0;
    let devName = developer.firstName;
    for (let i = 0; i < devName.length; i++) {
      devASCII += devName.charCodeAt([i]);
    }
    if (devASCII % 2 === 1) {
      newArray.push(developer);
    }
  });
  return newArray;
}
