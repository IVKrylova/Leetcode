// 59. Spiral Matrix II
// Array, Matrix, Simulation

// Level - Medium

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Constraints:
// 1 <= n <= 20

const generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(null));
  const max = n * n;
  let i = 1;
  const DIRECTIONS = {
    rowRight: 1,
    colBottom: 2,
    rowLeft: 3,
    colTop: 4,
  };
  let dir = DIRECTIONS.rowRight;
  let j = -1;
  let k = -1;
  while (i <= max) {
    if (dir === DIRECTIONS.rowRight) {
      j++;
      k++;
      while (matrix[j][k] === null) {
        matrix[j][k] = i;
        i++;
        k++;
      }
      dir = DIRECTIONS.colBottom;
    } else if (dir === DIRECTIONS.colBottom) {
      j++;
      k--;
      while (matrix[j] && matrix[j][k] === null) {
        matrix[j][k] = i;
        i++;
        j++;
      }
      dir = DIRECTIONS.rowLeft;
    } else if (dir === DIRECTIONS.rowLeft) {
      j--;
      k--;
      while (matrix[j][k] === null) {
        matrix[j][k] = i;
        i++;
        k--;
      }
      dir = DIRECTIONS.colTop;
    } else if (dir === DIRECTIONS.colTop) {
      j--;
      k++;
      while (matrix[j] && matrix[j][k] === null) {
        matrix[j][k] = i;
        i++;
        j--;
      }
      dir = DIRECTIONS.rowRight;
    }
  }
  return matrix;
};

