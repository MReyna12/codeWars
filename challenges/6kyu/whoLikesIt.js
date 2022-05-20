//  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//  Implement the function which takes an array containing the names of people that like an item.
//  Note: For 4 or more names, the number in "and 2 others" simply increases.

//P: The argument we are taking in is an array of strings.
//R: String. If the number of names is greater than one and less than or equal to three then return each name and the text "like this"; if number of names is one or 0 then return name like this or no one likes this, respectively; if greater than three return first two names and then number of ppl that like
//E: see example.
//P: Make variables for one, two, three, and four+ people liking something; use array.length to determine which variable is applicable;

// Function declaration; ocnditional
function likes(names) {
  const firstPerson = names[0];
  const secondPerson = names[1];
  const thirdPerson = names[2];
  const otherPeople = names.length - 2;
  const noPeopleLike = "no one likes this";
  const onePersonLikes = `${firstPerson} likes this`;
  const twoPeopleLike = `${firstPerson} and ${secondPerson} like this`;
  const threePeopleLike = `${firstPerson}, ${secondPerson} and ${thirdPerson} like this`;
  const fourOrMorePeopleLike = `${firstPerson}, ${secondPerson} and ${otherPeople} others like this`;
  if (names.length === 0) {
    return noPeopleLike;
  } else if (names.length === 1) {
    return onePersonLikes;
  } else if (names.length === 2) {
    return twoPeopleLike;
  } else if (names.length === 3) {
    return threePeopleLike;
  } else {
    return fourOrMorePeopleLike;
  }
}

// Function declaration; object; conditional
function likes(names) {
  const peopleAndLikes = {
    firstPerson: names[0],
    secondPerson: names[1],
    thirdPerson: names[2],
    otherPeople: names.length - 2,
    noPeopleLikes: "no one likes this",
    onePersonLikes() {
      return `${this.firstPerson} likes this`;
    },
    twoPeopleLike() {
      return `${this.firstPerson} and ${this.secondPerson} like this`;
    },
    threePeopleLike() {
      return `${this.firstPerson}, ${this.secondPerson} and ${this.thirdPerson} like this`;
    },
    fourOrMorePeopleLike() {
      return `${this.firstPerson}, ${this.secondPerson} and ${this.otherPeople} others like this`;
    },
  };
  if (names.length === 0) {
    return peopleAndLikes.noPeopleLikes;
  } else if (names.length === 1) {
    return peopleAndLikes.onePersonLikes();
  } else if (names.length === 2) {
    return peopleAndLikes.twoPeopleLike();
  } else if (names.length === 3) {
    return peopleAndLikes.threePeopleLike();
  } else {
    return peopleAndLikes.fourOrMorePeopleLike();
  }
}
