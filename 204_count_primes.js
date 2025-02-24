// 204. Count Primes
// Array, Math, Enumeration, Number Theory

// Level - Medium

// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// Constraints:
// 0 <= n <= 5 * 10^6

const countPrimes = function (n) {
  if (n <= 2) return 0;
  const nums = [];
  for (i = 2; i < n; i++) {
    nums[i] = true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (nums[i]) {
      for (let j = i * i; j < n; j += i) {
        nums[j] = false;
      }
    }
  }
  return nums.filter((el) => el).length;
};
