// 73. Set Matrix Zeroes
// Array, Hash Table, Matrix 

// Level - Medium

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

const setZeroes = function (matrix) {
  const rows = [];
  const columns = [];
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (matrix[i].includes(0)) {
      rows.push(i);
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 0) columns.push(j);
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    matrix[rows[i]] = matrix[rows[i]].map((el) => (el = 0));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < columns.length; j++) {
      matrix[i][columns[j]] = 0;
    }
  }

  return matrix;
};
