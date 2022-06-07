const nameShuffler = (str) => {
  let arrayNames = str.split(" ");
  const lastName = arrayNames.pop();
  const firstName = arrayNames.shift();
  const reversedName = `${lastName} ${firstName}`;
  return reversedName;
};

function nameShuffler(str) {
  const arrayNames = str.split("");
  const reversedName = `${arrayNames[1]} ${arrayNames[0]}`;
  return reversedName;
}
