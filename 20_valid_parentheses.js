// 20. Valid Parentheses
// String, Stack

// Level - Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine
// if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Constraints:
// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

const isValid = function (s) {
  const end = ")]}";
  const start = "([{";
  const queue = [];
  if (end.includes(s[0])) return false;
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (start.includes(s[i])) {
      queue.push(s[i]);
    } else {
      if (end.indexOf(s[i]) === start.indexOf(queue[queue.length - 1])) {
        queue.pop();
      } else {
        return false;
      }
    }
  }
  return queue.length === 0;
};
