// 119. Pascal's Triangle II
// Array, Dynamic Programming

// Level - Easy

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//        1
//       1 1
//     1  2  1
//   1  3  3  1
// 1  4  6  4  1

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

// Constraints:
// 0 <= rowIndex <= 33

const getRow = function (rowIndex) {
  dp = new Array(rowIndex + 1);
  for (let i = 0; i <= rowIndex; i++) {
    dp[i] = new Array(i + 1).fill(1);
    if (i > 1) {
      for (let j = 1; j < dp[i - 1].length; j++) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[rowIndex];
};