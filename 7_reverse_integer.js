// 7. Reverse Integer
// Math

// Level - Medium

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes
// the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -2^31 <= x <= 2^31 - 1

const reverse = function (x) {
  const num =
    x < 0
      ? -1 * Number(x.toString().slice(1).split("").reverse().join(""))
      : Number(x.toString().split("").reverse().join(""));
  const leftBorder = Math.pow(-2, 31);
  const rightBorder = Math.pow(2, 31) - 1;
  return num < leftBorder || num > rightBorder ? 0 : num;
};
