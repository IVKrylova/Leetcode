// 459. Repeated Substring Pattern
// String, String Matching

// Level - Easy

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the
// substring together.

// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:
// Input: s = "aba"
// Output: false

// Example 3:
// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:
// 1 <= s.length <= 10^4
// s consists of lowercase English letters.

const repeatedSubstringPattern = function (s) {
  let j = 1;
  while (j < s.length) {
    while (j < s.length && s[0] !== s[j]) {
      j++;
    }
    if (j < s.length) {
      const n = s.length / j;
      if (s.substring(0, j).repeat(n) === s) return true;
      j++;
    }
  }
  return false;
};
