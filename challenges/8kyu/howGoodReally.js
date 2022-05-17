// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Function declaration; reduce method
function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, current) => acc + current) / classPoints.length <
    yourPoints
  );
}

// Function expression; reduce method
const betterThanAverage = (classPoints, yourPoints) => {
  const classAverage =
    classPoints.reduce((acc, current) => acc + current) / classPoints.length;
  return classAverage < yourPoints;
};
