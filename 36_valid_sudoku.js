// 36. Valid Sudoku
// Array, Hash Table, Matrix

// Level - Medium

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the
// following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there
// are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

const calcSquer = (i, j) => {
  if (i < 3 && j < 3) {
    return 0;
  } else if (i < 3 && j < 6) {
    return 1;
  } else if (i < 3) {
    return 2;
  } else if (i < 6 && j < 3) {
    return 3;
  } else if (i < 6 && j < 6) {
    return 4;
  } else if (i < 6) {
    return 5;
  } else if (j < 3) {
    return 6;
  } else if (j < 6) {
    return 7;
  } else {
    return 8;
  }
};

const isValidSudoku = function (board) {
  const rows = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const columns = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const squers = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (numbers.has(+board[i][j])) {
        if (rows[i][+board[i][j] - 1]) {
          return false;
        } else {
          rows[i][+board[i][j] - 1] = true;
        }

        if (columns[j][+board[i][j] - 1]) {
          return false;
        } else {
          columns[j][+board[i][j] - 1] = true;
        }

        if (squers[calcSquer(i, j)][+board[i][j] - 1]) {
          return false;
        } else {
          squers[calcSquer(i, j)][+board[i][j] - 1] = true;
        }
      }
    }
  }

  return true;
};
