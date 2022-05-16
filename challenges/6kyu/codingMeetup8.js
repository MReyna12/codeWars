//  You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//  Your task is to return:
//    true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
//    false otherwise.

//P: Parameter is an array of objects
//R: I need to return true if Africa, Americas, Asia, Europe, and Oceania are represented by at least one developer; false otherwise
//E: [{continent: 'Africa}, {'Americas'}, {'Asia'}, {'Eruope'}, {'Oceania'}] // true
//P: some method for each continent and put result in a variable for each test; then a conditional that returns true if all five tests variables === true otherwise return false

//Function declaration; some method; conditional
function allContinents(list) {
    const africaTest = list.some(developer => developer.continent === 'Africa');
    const americasTest = list.some(developer => developer.continent === 'Americas');
    const asiaTest = list.some(developer => developer.continent === 'Asia');
    const europeTest = list.some(developer => developer.continent === 'Europe');
    const oceaniaTest = list.some(developer => developer.continent === 'Oceania');
    if (africaTest === true && americasTest === true && asiaTest  === true && europeTest  === true && oceaniaTest  === true) {
      return true
    } else {
        return false
    }
}

// Function declaration; forEach method; conditionals
function allContinents(list) {
  let africanDevs = 0;
  let americanDevs = 0;
  let asianDevs = 0;
  let europeanDevs = 0;
  let oceanicDevs = 0;
  list.forEach(developer => {
    if (developer.continent === 'Africa') {
      africanDevs = 1;
    } else if (developer.continent === 'Americas') {
        americanDevs = 1;
    } else if (developer.continent === 'Asia') {
        asianDevs = 1;
    } else if (developer.continent === 'Europe') {
        europeanDevs = 1;
    } else if (developer.continent === 'Oceania') {
        oceanicDevs = 1;
    }
  });
  if (africanDevs === 1 && americanDevs === 1 && asianDevs  === 1 && europeanDevs  === 1 && oceanicDevs  === 1) {
    return true;
  } else {
      return false;
  }
}

// Function declaration; forEach method; Object.keys + .length
function allContinents(list) {
    const developerCountries = {};
    list.forEach(obj => developerCountries[obj.continent] ? developerCountries[obj.continent]++ : developerCountries[obj.continent] = 1);
    const lengthOfObject = Object.keys(developerCountries).length
    if (lengthOfObject === 5) {
      return true
    } else {
        return false
    }
}

// Function declaration; map method to obtain the continents of the developers part of the object; return true if the array of continents includes all five continents otherwise return false
function allContinents(list) {
  const continents = list.map(developer => developer.continent);
  const result = continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
  return result
}