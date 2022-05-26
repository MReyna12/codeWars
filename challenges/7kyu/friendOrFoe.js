//  If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//  Note: keep the original order of the names in the output.

//P: array of strings
//R: array with strings with exactly 4 letters in the string
//E: ['bill', 'wefewf', 'jill'] // ['bill'. 'jill']
//P: filter method to remove names with a length = 4

// Function declaration; filter method
function friend(friends) {
  const trueFriends = friends.filter((name) => name.length === 4);
  return trueFriends;
}

// Function expression; filter method
const friend = (friends) => {
  const trueFriends = friends.filter((name) => name.length === 4);
  return trueFriends;
};
