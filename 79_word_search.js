// 79. Word Search
// Array, String, Backtracking, Matrix

// Level - Medium

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

const isValid = (board, i, j, word, k, visited) => {
  visited.add(`${i}-${j}`);
  if (board[i][j] !== word[k]) return false;
  if (
    board[i - 1] &&
    board[i - 1][j] === word[k + 1] &&
    !visited.has(`${i - 1}-${j}`)
  ) {
    isValid(board, i - 1, j, word, k + 1, visited);
  }
  if (
    board[i + 1] &&
    board[i + 1][j] === word[k + 1] &&
    !visited.has(`${i + 1}-${j}`)
  ) {
    isValid(board, i + 1, j, word, k + 1, visited);
  }
  if (
    board[i][j - 1] &&
    board[i][j - 1] === word[k + 1] &&
    !visited.has(`${i}-${j - 1}`)
  ) {
    isValid(board, i, j - 1, word, k + 1, visited);
  }
  if (
    board[i][j + 1] &&
    board[i][j + 1] === word[k + 1] &&
    !visited.has(`${i}-${j + 1}`)
  ) {
    isValid(board, i, j + 1, word, k + 1, visited);
  }
  if (visited.size === word.length) return true;
  visited.delete(`${i}-${j}`);
  return false;
};

const exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const visited = new Set();
      if (isValid(board, i, j, word, 0, visited)) return true;
    }
  }
  return false;
};
