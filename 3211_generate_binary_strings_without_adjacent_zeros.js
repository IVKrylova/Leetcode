// 3211. Generate Binary Strings Without Adjacent Zeros
// String, Backtracking, Bit Manipulation

// Level - Easy

// You are given a positive integer n.
// A binary string x is valid if all substrings of x of length 2 contain at least one "1".
// Return all valid strings with length n, in any order.

// Example 1:
// Input: n = 3
// Output: ["010","011","101","110","111"]
// Explanation:
// The valid strings of length 3 are: "010", "011", "101", "110", and "111".

// Example 2:
// Input: n = 1
// Output: ["0","1"]
// Explanation:
// The valid strings of length 1 are: "0" and "1".

// Constraints:
// 1 <= n <= 18

const generate = (n, prefix, res) => {
  if (n === 0) {
    res.push(prefix);
    return;
  }

  generate(n - 1, prefix + 0, res);
  generate(n - 1, prefix + 1, res);
};

const filter = (str) => {
  let i = 0;
  while (i < str.length - 1) {
    if (!`${str[i]}${str[i + 1]}`.includes("1")) return false;
    i++;
  }
  return true;
};

const validStrings = function (n) {
  if (n === 1) return ["0", "1"];
  const res = [];
  generate(n, "", res);
  return res.filter((el) => filter(el));
};

validStrings(3);
