// 118. Pascal's Triangle
// Array, Dynamic Programming

// Level - Easy

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//        1
//       1 1
//     1  2  1
//   1  3  3  1
// 1  4  6  4  1

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

const generate = function (numRows) {
  dp = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1);
    if (i > 1) {
      for (let j = 1; j < dp[i - 1].length; j++) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp;
};
