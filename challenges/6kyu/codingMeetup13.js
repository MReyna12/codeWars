//  Three programming languages will be represented: Python, Ruby and JavaScript.
//  Your task is to return either:
//    true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
//    false otherwise.
//  The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
//  Each of the 3 programming languages will always be represented.

//P: an array of objects with various key/value pairs for each developer
//R: return true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or return false otherwise
//E: 3 JS, 2 Python, 1 Ruby // false beacuse JS is three times higher than Ruby; 2 JS 2 Python 1 Ruby // true because nothing is more than 2 times higher
//P:

// Function declaration
function isLanguageDiverse(list) {
  let javaScriptDevs = 0;
  let pythonDevs = 0;
  let rubyDevs = 0;
  list.forEach((developer) => {
    if (developer.language === "JavaScript") {
      javaScriptDevs += 1;
    } else if (developer.language === "Python") {
      pythonDevs += 1;
    } else if (developer.language === "Ruby") {
      rubyDevs += 1;
    }
  });
  if (
    Math.min(javaScriptDevs, pythonDevs, rubyDevs) * 2 >=
    Math.max(javaScriptDevs, pythonDevs, rubyDevs)
  ) {
    return true;
  } else {
    return false;
  }
}
