function solution(str) {
  let strCopy = str.slice();
  if (strCopy.length % 2 === 1) strCopy += "_";

  let pairs = [];

  for (let i = 0; i < strCopy.length; i += 2) {
    const pair = strCopy[i] + strCopy[i + 1];
    pairs.push(pair);
  }

  return pairs;
}
