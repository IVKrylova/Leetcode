// 3. Longest Substring Without Repeating Characters
// Hash Table, String, Sliding Window

// Level - Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let res = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      count++;
      set.add(s[i]);
    } else {
      if (count > res) res = count;
      for (const item of set) {
        if (item !== s[i]) {
          set.delete(item);
        } else break;
      }
      set.delete(s[i]);
      set.add(s[i]);
      count = set.size;
    }
  }
  if (set.size > res) res = set.size;
  return res;
};
