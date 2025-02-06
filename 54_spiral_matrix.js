// 54. Spiral Matrix
// Array, Matrix, Simulation

// Level - Medium

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

const spiralOrder = function (matrix) {
  const DIRECTIONS = {
    rowRight: 1,
    colBottom: 2,
    rowLeft: 3,
    colTop: 4,
  };
  let dir = DIRECTIONS.rowRight;
  const max = matrix.length * matrix[0].length;
  let i = 1;
  let j = -1;
  let k = -1;
  const res = [];
  while (i <= max) {
    if (dir === DIRECTIONS.rowRight) {
      j++;
      k++;
      while (matrix[j][k] !== undefined) {
        res.push(matrix[j][k]);
        matrix[j][k] = undefined;
        i++;
        k++;
      }
      dir = DIRECTIONS.colBottom;
    } else if (dir === DIRECTIONS.colBottom) {
      j++;
      k--;
      while (matrix[j] && matrix[j][k] !== undefined) {
        res.push(matrix[j][k]);
        matrix[j][k] = undefined;
        i++;
        j++;
      }
      dir = DIRECTIONS.rowLeft;
    } else if (dir === DIRECTIONS.rowLeft) {
      j--;
      k--;
      while (matrix[j][k] !== undefined) {
        res.push(matrix[j][k]);
        matrix[j][k] = undefined;
        i++;
        k--;
      }
      dir = DIRECTIONS.colTop;
    } else if (dir === DIRECTIONS.colTop) {
      j--;
      k++;
      while (matrix[j] && matrix[j][k] !== undefined) {
        res.push(matrix[j][k]);
        matrix[j][k] = undefined;
        i++;
        j--;
      }
      dir = DIRECTIONS.rowRight;
    }
  }
  return res;
};
