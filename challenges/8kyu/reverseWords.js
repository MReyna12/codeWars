//  Complete the solution so that it reverses all of the words within the string passed in.

//P: string of words
//R: return the string in reverse
//E: 'Eat more chicken' // 'chicken more Eat'
//P: for loop starting from the end of the string and add each letter to a new empty string

//function declaration; split method; for loop; join method
function reverseWords(str) {
  let array = str.split(" ");
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  let reverseString = reverseArray.join(" ");
  return reverseString;
}

// function declaration; split method; reverse method; join method
function reverseWords(str) {
  let array = str.split(" ");
  let reverseArray = array.reverse();
  let reverseString = reverseArray.join(" ");
  return reverseString;
}
