// 415. Add Strings
// Math, String, Simulation

// Level - Easy

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1
// and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers
// (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"

// Example 3:
// Input: num1 = "0", num2 = "0"
// Output: "0"

// Constraints:
// 1 <= num1.length, num2.length <= 10^4
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

const addStrings = function (num1, num2) {
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  let res = "";
  let memo = 0;
  while (l1 >= 0 || l2 >= 0) {
    const n =
      memo +
      (isNaN(Number(num1[l1])) ? 0 : Number(num1[l1])) +
      (isNaN(Number(num2[l2])) ? 0 : Number(num2[l2]));
    if (n >= 10) {
      res = (n % 10) + res;
      memo = Math.floor(n / 10);
    } else {
      res = n + res;
      memo = 0;
    }
    l1--;
    l2--;
  }
  return memo ? memo + res : res;
};
