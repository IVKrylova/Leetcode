// 17. Letter Combinations of a Phone Number
// Hash Table, String, Backtracking

// Level - Medium

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations
// that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note
// that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

const letterCombinations = function (digits) {
  if (digits === "") return [];
  const alphabet = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const letters = [];
  for (let i = 0; i < digits.length; i++) {
    letters.push(alphabet[digits[i]]);
  }
  const res = [];
  const generate = (n, current) => {
    if (current.length === digits.length) {
      res.push(current);
      return;
    }
    for (let i = 0; i < letters[n].length; i++) {
      generate(n + 1, current + letters[n][i]);
    }
  };
  generate(0, "");
  return res;
};
