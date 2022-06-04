const peopleWithAgeDrink = (old) => {
  const beverages = {
    whisky: "drink whisky",
    beer: "drink beer",
    coke: "drink coke",
    toddy: "drink toddy",
  };
  if (old >= 21) {
    return beverages.whisky;
  } else if (old > 17) {
    return beverages.beer;
  } else if (old >= 14) {
    return beverages.coke;
  } else {
    return beverages.toddy;
  }
};
