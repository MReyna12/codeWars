// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Function declaration/arrow function
function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.slice(0, 1))
    .join(".")
    .toUpperCase();
}

// Function expression/arrow function
const abbrevName = (name) =>
  name
    .split(" ")
    .map((x) => x.slice(0, 1))
    .join(".")
    .toUpperCase();

// Function declaration/forEach
function abbrevName(name) {
  let initials = [];
  name.split(" ").forEach((x) => {
    let i = x.slice(0, 1);
    initials.push([i]);
  });
  return initials.join(".").toUpperCase();
}

function abbrevName(name) {
  const arrayNames = name.split(" ");
  return `${arrayNames[0][0]}.${arrayNames[1][0]}`.toUpperCase();
}
