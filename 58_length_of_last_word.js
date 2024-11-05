// 58. Length of Last Word
// String

// Level - Easy

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:
// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

const lengthOfLastWord = function (s) {
  const str = s.trim();

  for (let i = str.length; i >= 0; i--) {
    if (str[i] === " ") {
      return str.length - (i + 1);
    }
    if (i === 0) return str.length;
  }
};
