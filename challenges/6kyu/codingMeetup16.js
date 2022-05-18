//  write a function that
//    adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
//      Hi, could you please provide your <property name>.
//    and returns only the developers with missing details.
//  At most only one of the values will be null / empty.
//  Preserve the order of the original list.
//  Return an empty array [] if there is no developer with missing details.

//P: an array of objects containing similar key/value pairs, except the value of one key is null
//R: return an array of the objects with missing values and add the key 'question' with a value of `Hi, could you please provide your ${missing value here}`; however, if there are no missing values, then return an empty array
//E: [{firstName: null}, {lastName: null}] // [{firstName: null, question: text}, {lastName: null, question: text}]; [{all details provided}] // [].
//P: Filter provides an empty array if the text implemented by the function is not passed/met, so use filter method to filter out developer objects with missing values, if any.

// Function declaration; filter method; for in loop; conditional; template literal
function askForMissingDetails(list) {
  return list.filter((developer) => {
    for (const key in developer) {
      if (developer[key] === null) {
        developer.question = `Hi, could you please provide your ${key}.`;
        return developer;
      }
    }
  });
}

// Function declaration; map method; filter method; for in loop; conditional; template literal
function askForMissingDetails(list) {
  return list
    .map((developer) => {
      for (const key in developer) {
        if (developer[key] === null) {
          developer.question = `Hi, could you please provide your ${key}.`;
        }
      }
      return developer;
    })
    .filter((developer) => {
      return typeof developer.question !== "undefined";
    });
}
