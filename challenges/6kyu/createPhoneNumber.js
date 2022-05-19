//  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//  Don't forget the space after the closing parentheses!

//P: an array of 10 integers, each between 0 and 9
//R: using the 10 integers, put them into phone number format (xxx) xxx-xxxx; the phone number format should be a string
//E: [1,1,1,1,1,1,1,1,1,1] // (111) 111-1111
//P: create three variables and use slice method to set the values for each variable and then the join method to remove the commas between the integers; first variable will contain first three numbers; second variable the next three numbers; third variable the next four numbers;
// create a fourth variable that will use a template literal with the three variables inside.

// Function declaration
function createPhoneNumber(numbers) {
  let string = numbers.join("");
  let firstThreeNumbers = string.slice(0, 3);
  let secondThreeNumbers = string.slice(3, 6);
  let fourNumbers = string.slice(6, 10);
  const phoneNumber = `(${firstThreeNumbers}) ${secondThreeNumbers}-${fourNumbers}`;
  return phoneNumber;
}
