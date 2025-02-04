// 32. Longest Valid Parentheses
// String, Dynamic Programming, Stack

// Level - Hard

// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed)
// parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 3 * 10^4
// s[i] is '(', or ')'.

const longestValidParentheses = function (s) {
  if (s.length === 0) return 0;
  const stack = [];
  const indexes = new Array(s.length).fill(false);
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        indexes[i] = true;
        indexes[stack.pop()] = true;
      }
    }
    i++;
  }
  let res = 0;
  i = 0;
  let cur = 0;
  while (i < s.length) {
    if (indexes[i]) {
      cur++;
    } else {
      if (cur > res) res = cur;
      cur = 0;
    }
    i++;
  }
  if (cur > res) res = cur;
  return res;
};
