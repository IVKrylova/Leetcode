// 402. Remove K Digits
// String, Stack, Greedy, Monotonic Stack

// Level - Medium

// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after
// removing k digits from num.

// Example 1:
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

// Example 2:
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

// Example 3:
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

// Constraints:
// 1 <= k <= num.length <= 10^5
// num consists of only digits.
// num does not have any leading zeros except for the zero itself.

const removeKdigits = function (num, k) {
  if (k >= num.length) return "0";
  const stack = [num[0]];
  let count = 0;
  let i = 1;
  while (count < k && i < num.length) {
    while (count < k && num[i] < stack[stack.length - 1]) {
      stack.pop();
      count++;
    }
    stack.push(num[i]);
    i++;
  }
  while (count < k) {
    stack.pop();
    count++;
  }
  let res = stack.join("") + num.substring(i);
  let j = 0;
  while (j < res.length && res[j] === "0") {
    j++;
  }
  res = res.substring(j);
  return res === "" ? "0" : res;
};
