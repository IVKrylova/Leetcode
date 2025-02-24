// 345. Reverse Vowels of a String
// Two Pointers, String

// Level - Easy

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 10^5
// s consist of printable ASCII characters.

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const reverseVowels = function (s) {
  const VOWELS = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
  let i = 0;
  let j = s.length - 1;
  const arr = s.split("");
  while (j > i) {
    while (i < s.length && !VOWELS.has(s[i])) {
      i++;
    }
    while (j >= 0 && !VOWELS.has(s[j])) {
      j--;
    }
    if (j > i) swap(arr, i, j);
    j--;
    i++;
  }
  return arr.join("");
};
