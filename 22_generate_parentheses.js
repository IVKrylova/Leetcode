// 22. Generate Parentheses
// String, Dynamic Programming, Backtracking

// Level - Medium

// Given n pairs of parentheses, write a function to generate all combinations of well-formed
// parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

const generate = (n, prefix, arr) => {
  if (n === 0) {
    arr.push(prefix);
  } else {
    generate(n - 1, prefix + "(", arr);
    generate(n - 1, prefix + ")", arr);
  }
};

const filter = (sequence) => {
  const stack = [];
  const start = "(";
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === start) {
      stack.push(sequence[i]);
    } else {
      if (stack[stack.length - 1] === start) {
        stack.pop();
      } else {
        stack.push(sequence[i]);
      }
    }
  }
  return stack.length === 0;
};

const generateParenthesis = (n) => {
  const res = [];
  generate(n * 2, "", res);
  return res.filter((el) => filter(el));
};
