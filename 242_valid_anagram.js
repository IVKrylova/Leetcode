// 242. Valid Anagram
// Hash Table, String, Sorting

// Level - Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 10^4
// s and t consist of lowercase English letters.

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sortedS = s.toLowerCase().split("").sort().join("");
  const sortedT = t.toLowerCase().split("").sort().join("");
  if (sortedS !== sortedT) return false;
  return true;
};
