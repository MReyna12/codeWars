function array(arr) {
  const convertToArray = arr.split(",");

  if (convertToArray.length < 3) return null;

  const removeFirstLast = convertToArray.slice(1, convertToArray.length - 1);
  const spacedString = removeFirstLast.join(" ");

  return spacedString;
}
