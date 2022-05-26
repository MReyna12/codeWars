//  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
//  However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//  Your task is to write a function maskify, which changes all but the last four characters into '#'.

//P: string
//R: return a string, but the last four characters should be the only characters to show (remaining characters are hash signs); that means if there is four or less characters then they will show
//E: '12345' // '#2345'; '123' // '123'
//P: conditional (if length of string is less than 5 return string); for loop (so long that i is less than string.length)

// function declaration; conditionals; for loop
function maskify(cc) {
  let secretWord = "";
  if (cc.length < 5) {
    return cc;
  }
  for (let i = 0; i < cc.length; i++) {
    if (i >= cc.length - 4) {
      secretWord += cc[i];
    } else if (i < cc.length - 4) {
      secretWord += "#";
    }
  }
  return secretWord;
}

// Function declaration; conditional; for loop
function maskify(cc) {
  if (cc.length < 5) {
    return cc;
  }
  let arrayOfStrings = cc.split("");
  for (let i = 0; i < arrayOfStrings.length - 4; i++) {
    arrayOfStrings[i] = "#";
  }
  let secretString = arrayOfStrings.join("");
  return secretString;
}
