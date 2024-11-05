// 509. Fibonacci Number
// Math, Dynamic Programming, Recursion, Memoization

// Level - Easy

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
// 0 <= n <= 30

const multiplication = ([[a1, a2], [b1, b2]], [[c1, c2], [d1, d2]]) => {
  return [
    [a1 * c1 + a2 * d1, a1 * c2 + a2 * d2],
    [b1 * c1 + b2 * d1, b1 * c2 + b2 * d2],
  ];
};

const fib = (n) => {
  // [[F(n + 1), F(n)],    =    [[BigInt(1), BigInt(1)],
  // [F(n), F(n - 1)],]          [BigInt(1), BigInt(0)]] ** n;

  let matrix = [
    [BigInt(1), BigInt(1)],
    [BigInt(1), BigInt(0)],
  ];
  let res = [
    [BigInt(1), BigInt(0)],
    [BigInt(0), BigInt(1)],
  ];
  let p = n;
  while (p) {
    if (p % 2 !== 0) {
      res = multiplication(res, matrix);
    }
    matrix = multiplication(matrix, matrix);
    p = Math.floor(p / 2);
  }
  return res[0][1];
};
