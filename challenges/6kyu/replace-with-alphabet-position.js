// P: A string of text
// R: A string with each LETTER replaced with its position in the alphabet
// E: 'Dog' // '4 15 7'
// P: Create an object that contains keys of letters and values of numbers. Loop through the string and compare each value to the object and if there is a match add the number to a new array. Join the new array into a string separated by spaces.

function alphabetPosition(text) {
  if (text.length === 0) return text;

  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 26,
    z: 27,
  };

  let numericArray = [];
  let counter = 0;

  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    if (alphabet[letter]) {
      numericArray[counter] = alphabet[letter];
      counter++;
    }
  }

  const numericString = numericArray.join(" ");
  return numericString;
}
