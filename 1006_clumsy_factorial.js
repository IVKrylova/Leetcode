// 1006. Clumsy Factorial
// Math, Stack, Simulation

// Level - Medium

// The factorial of a positive integer n is the product of all positive integers less than or
// equal to n.
// For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
// We make a clumsy factorial using the integers in decreasing order by swapping out the
// multiply operations for a fixed rotation of operations with multiply '*', divide '/', add
// '+', and subtract '-' in this order.
// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
// However, these operations are still applied using the usual order of operations of arithmetic.
// We do all multiplication and division steps before any addition or subtraction steps, and
// multiplication and division steps are processed left to right.
// Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.
// Given an integer n, return the clumsy factorial of n.

// Example 1:
// Input: n = 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1

// Example 2:
// Input: n = 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

// Constraints:
// 1 <= n <= 10^4

const clumsy = function (n) {
  const stack = [n];
  const operations = ["*", "/", "+", "-"];
  let i = n - 1;
  let j = 0;
  while (i) {
    if (operations[j] === "*") {
      const res = stack.pop() * i;
      stack.push(res);
    } else if (operations[j] === "/") {
      const res = Math.floor(stack.pop() / i);
      stack.push(res);
    } else {
      stack.push(i);
    }
    i--;
    j === 3 ? (j = 0) : j++;
  }
  let res = stack[0];
  let start = "+";
  for (let i = 1; i < stack.length; i++) {
    if (start === "+") {
      res += stack[i];
      start = "-";
    } else {
      res -= stack[i];
      start = "+";
    }
  }
  return res;
};

clumsy(10);
