// 50. Pow(x, n)
// Math, Recursion

// Level - Medium

// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -2^31 <= n <= 2^31 - 1
// n is an integer.
// Either x is not zero or n > 0.
// -10^4 <= x^n <= 10^4

const myPow = function (x, n) {
  if (n === 0 || x === 1) return 1;
  let p = Math.abs(n);
  let res = 1;
  let num = x;
  while (p) {
    if (p % 2 !== 0) {
      res *= num;
    }
    num = num * num;
    p = Math.floor(p / 2);
  }

  return n < 0 ? 1 / res : res;
};
