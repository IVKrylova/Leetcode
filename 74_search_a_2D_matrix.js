// 74. Search a 2D Matrix
// Array, Binary Search, Matrix

// Level - Medium

// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10^4 <= matrix[i][j], target <= 10^4

const searchRow = (matrix, target, start, end) => {
  if (start === end) {
    return target >= matrix[start][0] &&
      target <= matrix[start][matrix[start].length - 1]
      ? start
      : -1;
  }
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (
    target >= matrix[mid][0] &&
    target <= matrix[mid][matrix[mid].length - 1]
  ) {
    return mid;
  } else if (target > matrix[mid][matrix[mid].length - 1]) {
    return searchRow(matrix, target, mid + 1, end);
  } else {
    return searchRow(matrix, target, start, mid);
  }
};

const binarySearch = (arr, target, start, end) => {
  if (start === end) {
    return arr[start] === target ? start : -1;
  }
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
};

const searchMatrix = function (matrix, target) {
  const row = searchRow(matrix, target, 0, matrix.length - 1);
  if (row === -1) return false;
  const ind = binarySearch(matrix[row], target, 0, matrix[row].length - 1);
  return ind !== -1;
};
