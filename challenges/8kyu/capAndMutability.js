function capitalizeWord(word) {
  let firstLetterCapWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      let cap = word[i].toUpperCase()
      firstLetterCapWord += cap
    } else {
      firstLetterCapWord += word[i]
    }
  }
  return firstLetterCapWord;
}