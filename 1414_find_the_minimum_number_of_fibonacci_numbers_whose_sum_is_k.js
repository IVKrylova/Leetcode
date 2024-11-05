// 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
// Math, Greedy

// Level - Medium

// Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k.
// The same Fibonacci number can be used multiple times.
// The Fibonacci numbers are defined as:
// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 for n > 2.
// It is guaranteed that for the given constraints we can always find such Fibonacci numbers
// that sum up to k.

// Example 1:
// Input: k = 7
// Output: 2
// Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ...
// For k = 7 we can use 2 + 5 = 7.

// Example 2:
// Input: k = 10
// Output: 2
// Explanation: For k = 10 we can use 2 + 8 = 10.

// Example 3:
// Input: k = 19
// Output: 3
// Explanation: For k = 19 we can use 1 + 5 + 13 = 19.

// Constraints:
// 1 <= k <= 10^9

const fib = (k) => {
  const res = [0, 1];
  let i = 2;
  while (i) {
    const item = res[i - 1] + res[i - 2];
    if (item <= k) {
      res.push(item);
      i++;
    } else {
      return res;
    }
  }
  return res;
};

const findMinFibonacciNumbers = function (k) {
  const list = fib(k);
  let sum = k;
  const res = [];
  let ind = list.length - 1;
  while (sum > 0) {
    if (sum - list[ind] >= 0) {
      res.push(list[ind]);
      sum = sum - list[ind];
      let middleSum = sum;
      while (middleSum >= 0) {
        if (middleSum - list[ind] >= 0) {
          res.push(list[ind]);
          middleSum = middleSum - list[ind];
        } else {
          break;
        }
      }
      sum = middleSum;
      ind--;
    } else {
      ind--;
    }
  }
  return res.length;
};
