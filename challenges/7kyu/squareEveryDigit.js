// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// Function declaration; array; forEach
function squareDigits(num) {
  let array = num.toString().split('');
  array.forEach((element, index) => {
    array[index] = Math.pow(element, 2);
  });
  return Number(array.join(''));
}

// Function declaration; array; map method
function squareDigits(num) {
  let string = num.toString().split('').map(element => element * element).join('');
  return Number(string);
}

// FUnction declaration; array; reduce method
function squareDigits(num) {
  let array = num.toString().split('');
  let result = array.reduce((previous, current) => previous += current * current, '');
  return Number(result);
}


