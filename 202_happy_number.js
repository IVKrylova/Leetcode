// 202. Happy Number
// Hash Table, Math, Two Pointers

// Level - Easy

// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its
// digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly
// in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Example 2:
// Input: n = 2
// Output: false

// Constraints:
// 1 <= n <= 2^31 - 1

const isHappy = function (n) {
  const set = new Set();
  let num = n;
  while (num !== 1) {
    const str = `${num}`;
    num = 0;
    for (let i = 0; i < str.length; i++) {
      num += Number(str[i]) * Number(str[i]);
    }
    if (set.has(num)) {
      return false;
    } else {
      set.add(num);
    }
  }
  return true;
};
