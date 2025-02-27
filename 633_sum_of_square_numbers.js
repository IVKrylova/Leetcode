// 633. Sum of Square Numbers
// Math, Two Pointers, Binary Search

// Level - Medium

// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:
// Input: c = 3
// Output: false

// Constraints:
// 0 <= c <= 2^31 - 1

const judgeSquareSum = function (c) {
  const arr = [0, 1];
  let i = 2;
  while (arr[arr.length - 1] <= c) {
    arr.push(i * i);
    i++;
  }
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    const sum = arr[left] + arr[right];
    if (sum === c) {
      return true;
    } else if (sum > c) {
      right--;
    } else {
      left++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * 2 > c) return false;
    if (arr[i] * 2 === c) return true;
  }
};
