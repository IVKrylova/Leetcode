// 227. Basic Calculator II
// Math, String, Stack

// Level - Medium

// Given a string s which represents an expression, evaluate this expression and return its value.
// The integer division should truncate toward zero.
// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231,
// 2^31 - 1].
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such
// as eval().

// Example 1:
// Input: s = "3+2*2"
// Output: 7

// Example 2:
// Input: s = " 3/2 "
// Output: 1

// Example 3:
// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:
// 1 <= s.length <= 3 * 10^5
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

const calculate = function (s) {
  const set = new Set(["+", "-", "*", "/"]);
  const stack = [];
  let cur = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] !== " ") {
      if (!set.has(s[i])) {
        cur.push(s[i]);
        i++;
      } else {
        if (cur.length > 0) {
          stack.push(Number(cur.join("")));
          cur = [];
        }
        if (s[i] === "+" || s[i] === "-") {
          stack.push(s[i]);
          i++;
        } else {
          const action = s[i];
          i++;
          while (!set.has(s[i]) && i < s.length) {
            cur.push(s[i]);
            i++;
          }
          if (action === "*") {
            stack.push(stack.pop() * Number(cur.join("")));
          } else {
            stack.push(Math.floor(stack.pop() / Number(cur.join(""))));
          }
          cur = [];
        }
      }
    } else {
      i++;
    }
  }
  if (cur.length > 0) stack.push(Number(cur.join("")));
  let res = stack[0];
  i = 1;
  while (i < stack.length) {
    if (stack[i] === "+") {
      i++;
      res += stack[i];
    } else {
      i++;
      res -= stack[i];
    }
    i++;
  }
  return res;
};

