function shortcut(string) {
  let vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  }

  let noVowelString = '';
  for (const letter of string) {
    if (letter !== vowels[letter]) {
      noVowelString += letter;
    }
  }
  return noVowelString;
}