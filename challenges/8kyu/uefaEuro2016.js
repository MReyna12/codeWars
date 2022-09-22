function uefaEuro2016(teams, scores) {
  const initialMessage = `At match ${teams[0]} - ${teams[1]}`;
  if (scores[0] > scores[1]) {
    return `${initialMessage}, ${teams[0]} won!`;
  } else if (scores[0] < scores[1]) {
    return `${initialMessage}, ${teams[1]} won!`;
  } else {
    return `${initialMessage}, teams played draw.`;
  }
}
