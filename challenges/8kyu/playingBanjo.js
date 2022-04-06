// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// Function declaration; if/else statement
function areYouPlayingBanjo(name) {
  if ((name[0] === 'r') || (name[0] === 'R')) {
    return `${name} plays banjo`;
  } else {
      return `${name} does not play banjo`;
  }
}

// Function expression; ternary operator
const areYouPlayingBanjo = name => (name[0] === 'R') || (name[0] === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;