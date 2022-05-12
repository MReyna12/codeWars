//  You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//  Your task is to return the number of JavaScript developers coming from Europe.
//  If, there are no JavaScript developers from Europe then your function should return 0.
//  The format of the strings will always be Europe and JavaScript.

// Function declaration; forEach method
function countDevelopers(list) {
  let europeanJSDevs = 0;
  list.forEach(developer => {
    if (developer.continent === 'Europe' && developer.language === 'JavaScript') {
      europeanJSDevs += 1;
    }
  });
  return europeanJSDevs;
}

// Function declaration; filter method; push method;
function countDevelopers(list) {
  let europeanJSDevs = [];
  list.filter(developer => {
    if (developer.continent === 'Europe' && developer.language === 'JavaScript') {
      europeanJSDevs.push(developer);
    }
  });
  return europeanJSDevs.length;
}

// Function declaration; reduce method; ternary operator
function countDevelopers(list) {
  return list.reduce((acc, developer) => 
    (developer.continent === 'Europe' && developer.language === 'JavaScript')
      ? acc + 1 : acc
    , 0);
}