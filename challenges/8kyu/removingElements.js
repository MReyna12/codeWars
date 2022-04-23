// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

// Function declaration; filter method
function removeEveryOther(arr) {
 return arr.filter((_, i) => i % 2 === 0)
}