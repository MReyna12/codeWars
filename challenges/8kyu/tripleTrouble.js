function tripleTrouble(one, two, three) {
  let newString = "";
  for (let i = 0; i < one.length; i++) {
    newString += one[i] + two[i] + three[i];
  }
  return newString;
}
