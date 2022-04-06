// Given an array of integers your solution should find the smallest integer. 
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Function declaration/sort
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sortedArray = args.sort((a, b) => a - b);
    return sortedArray[0];
  }
}

// Function declaration/reduce
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((prev, current) => prev < current ? prev : current);
  }
}

