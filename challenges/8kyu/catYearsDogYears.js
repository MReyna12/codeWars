const humanYearsCatYearsDogYears = (humanYears) => {
  let humanCatDogAge = [];
  let catYears = 15;
  let dogYears = 15;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else if (i >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }

  humanCatDogAge.push(humanYears, catYears, dogYears);
  return humanCatDogAge;
};
