//  Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//  You can guarantee that input is non-negative.

//P:
//R:
//E:
//P:

function countBits(number) {
  const binary = number.toString(2);
  const binaryArray = binary.split("1");
  console.log(binaryArray);
  const sum = binaryArray.reduce(
    (acc, currentVal) => acc + Number(currentVal),
    0
  );
  return sum;
}
