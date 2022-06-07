function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf");
  const sheepAfterWolfIndex = wolfIndex + 1;
  const sheepNumber = queue.length - sheepAfterWolfIndex;
  if (sheepNumber === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}
