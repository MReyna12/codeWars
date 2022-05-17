//  You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

//P: The parameter being taken in is an array of objects.
//R: The return value for the function should be a sequence that includes the developer who is the oldest; however, if there is more than one developer that is the oldest age, then include said developers in their original order w/o the younger developers.
//E: [{age: 30}, {age: 32}, {age: 45}] // {age: 45}; [{age: 30}, {age: 35}, {age: 35}] // [{age: 35}, {age: 35}]
//P: sort method to get highest value in the last index, then filter method to create a new array with the highest age comparing each developer's age to the last developer

// Function declaration; sort method; filter method;
function findSenior(list) {
  const sortedArray = list.sort((a, b) => a.age - b.age);
  const filteredArray = sortedArray.filter(
    (developer) => developer.age === list[list.length - 1].age
  );
  return filteredArray;
}
