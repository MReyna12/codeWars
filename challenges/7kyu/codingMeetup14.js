//  Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form.
//  The order of the meals count in the object does not matter.
//  The count value should be a valid number.
//  there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

//P: an array of objects, which includes the meal option for each developer object
//R: return an object that includes a key with the name of the meal option and a value for the applicable key that is numeric
//E: if the food options selected are two standard and one vegetarian, then return value is {standard: 2, vegetarian: 1}
//P: create an empty object variable, then use forEach to go through each developer and check if their meal option is inside of the empty object, if not add the meal option and set it equal to 1, if it is, then increase the value of said food option by one

// Function declaration; forEach method; ternary conditional
function orderFood(list) {
  let numberOfMeals = {};
  list.forEach((developer) =>
    numberOfMeals[developer.meal]
      ? numberOfMeals[developer.meal]++
      : (numberOfMeals[developer.meal] = 1)
  );
  return numberOfMeals;
}

// Function declaration; reduce method
function orderFood(list) {
  return list.reduce((acc, developer) => {
    acc[developer.meal] = (acc[developer.meal] || 0) + 1;
    return acc;
  }, {});
}
