// 65. Valid Number
// String

// Level - Hard

// Given a string s, return whether s is a valid number.
// For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7",
// "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5",
// "--6", "-+3", "95a54e53".
// Formally, a valid number is defined using one of the following definitions:
// An integer number followed by an optional exponent.
// A decimal number followed by an optional exponent.
// An integer number is defined with an optional sign '-' or '+' followed by digits.
// A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:
// Digits followed by a dot '.'.
// Digits followed by a dot '.' followed by digits.
// A dot '.' followed by digits.
// An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.
// The digits are defined as one or more digits.

// Example 1:
// Input: s = "0"
// Output: true

// Example 2:
// Input: s = "e"
// Output: false

// Example 3:
// Input: s = "."
// Output: false

// Constraints:
// 1 <= s.length <= 20
// s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.

const isNumber = function (s) {
  if (
    s === "." ||
    s[0] === "e" ||
    s[0] === "E" ||
    s[s.length - 1] === "e" ||
    s[s.length - 1] === "E" ||
    s === "+." ||
    s === "-." ||
    s === "+" ||
    s === "-" ||
    s.startsWith("+.E") ||
    s === "-" ||
    s.startsWith("+.e")
  ) {
    return false;
  }

  const set = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let dot = false;
  let exp = false;
  let i = s[0] === "-" || s[0] === "+" ? 1 : 0;
  let prev = s[0] === "-" || s[0] === "+" ? s[0] : null;

  while (i < s.length) {
    if (set.has(Number(s[i]))) {
      prev = s[i];
    } else if (s[i] === ".") {
      if (!dot) {
        if (exp) return false;
        dot = true;
      } else {
        return false;
      }
    } else if (s[i] === "e" || s[i] === "E") {
      if (!exp) {
        if ((prev === "." && i === 1) || prev === "-" || prev === "+") {
          return false;
        }
        exp = true;
      } else {
        return false;
      }
    } else if (
      (s[i] === "+" || s[i] === "-") &&
      (prev === "e" || prev === "E") &&
      s[i + 1]
    ) {
      prev = s[i];
    } else {
      return false;
    }
    prev = s[i];
    i++;
  }
  return true;
};

// const isNumber = function (s) {
//   if (s.endsWith("Infinity")) return false;
//   const num = Number(s);
//   return !isNaN(num);
// };
