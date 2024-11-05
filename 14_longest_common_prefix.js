// 14. Longest Common Prefix
// String, Trie

// Level - Easy

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

const longestCommonPrefix = function (strs) {
  const l = Math.min(...strs.map((el) => el.length));
  let res = "";
  for (j = 0; j < l; j++) {
    let i = 1;
    const ent = strs[0].slice(0, j + 1);
    while (i < strs.length) {
      if (strs[i].startsWith(ent)) {
        i++;
      } else {
        return res;
      }
    }
    res = ent;
  }
  return res;
};
