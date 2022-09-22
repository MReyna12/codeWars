const addLength = (str) => {
  const arrayOfWords = str.split(" ");

  const arrayOfWordsAndLength = arrayOfWords.map((word) => {
    const length = word.length;
    return `${word} ${length}`;
  });

  return arrayOfWordsAndLength;
};
