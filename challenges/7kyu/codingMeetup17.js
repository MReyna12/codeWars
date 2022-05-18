//  Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:
//  The array does not include developers coding in the same language and sharing the same name.

//P: an array of objects
//R: return array sorted alphabetically by the programming language; if there are multiple of the same language, then sort alphabetically by the first name
//E:
//P: use map to create a new array; sort the new array using conditionals comparing the developer objects values/keys mentioned above

// Function declaration
function sortByLanguage(list) {
  let newArray = list.map((developer) => developer);
  newArray.sort((firstDev, secondDev) => {
    if (
      (firstDev.language === secondDev.language &&
        firstDev.firstName < secondDev.firstName) ||
      firstDev.language < secondDev.language
    ) {
      return -1;
    } else if (
      (firstDev.language === secondDev.language &&
        firstDev.firstName > secondDev.firstName) ||
      firstDev.language > secondDev.language
    ) {
      return 1;
    }
  });
  return newArray;
}
