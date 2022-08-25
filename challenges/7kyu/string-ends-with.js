function solution(str, ending) {
  if (ending === "") return true;
  if (!str.includes(ending)) return false;

  const secondStringLength = ending.length;

  const firstStringSlice = str.slice(-secondStringLength);

  return firstStringSlice === ending;
}
