//  You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return:
//    true if at least one Ruby developer has signed up; or
//    false if there will be no Ruby developers.

// Function declaration; some method
function isRubyComing(list) {
  const doesRubyExist = list.some((developer) => developer.language === "Ruby");
  return doesRubyExist;
}

// Function declaration; find method; ternary operator
function isRubyComing(list) {
  return list.find((developer) => developer.language === "Ruby") ? true : false;
}

// Function declaration; filter method; conditional
function isRubyComing(list) {
  const rubyDevs = list.filter(
    (developer) => developer.language === "Ruby"
  ).length;
  if (rubyDevs > 0) {
    return true;
  } else {
    return false;
  }
}
