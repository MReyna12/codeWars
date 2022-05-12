//  You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. 
//  The list is ordered according to who signed up first.
//  Your task is to return one of the following strings:
//    < firstName here >, < country here > of the first Python developer who has signed up; or
//    There will be no Python developers if no Python developer has signed up.

// Function declaration; find method; conditional
function getFirstPython(list) {
  const pythonDeveloper = list.find(developer => developer.language === 'Python');
  if (pythonDeveloper) {
    return `${pythonDeveloper.firstName}, ${pythonDeveloper.country}`
  } else {
      return `There will be no Python developers`
  }
}

// Function declaration; filter method; ternary operator
function getFirstPython(list) {
  const pythonDeveloper = list.filter(developer => developer.language === 'Python');
  return pythonDeveloper.length >= 1 ? `${pythonDeveloper[0].firstName}, ${pythonDeveloper[0].country}` : `There will be no Python developers`
}