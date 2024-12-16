// 258. Add Digits
// Math, Simulation, Number Theory

// Level - Easy

// Given an integer num, repeatedly add all its digits until the result has only one digit, and
// return it.

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0

// Constraints:
// 0 <= num <= 2^31 - 1

const addDigits = function (num) {
  if (num < 10) return num;
  let res = 0;
  let str = num.toString();
  while (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      res += Number(str[i]);
    }
    str = res.toString();
    res = 0;
  }
  return res;
};

addDigits(1);
