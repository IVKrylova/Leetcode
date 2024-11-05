// 49. Group Anagrams
// Array, Hash Table, String, Sorting

// Level - Medium

// Given an array of strings strs, group the anagrams together. You can return the answer
// in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

const groupAnagrams = function (strs) {
  if (strs.length === 0) return [[]];
  const list = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].toLowerCase().split("").sort().join("");
    if (list[str]) {
      list[str].push(i);
    } else {
      list[str] = [i];
    }
  }

  const res = [];
  let j = 0;
  for (let key in list) {
    res[j] = [];
    for (let i = 0; i < list[key].length; i++) {
      res[j].push(strs[list[key][i]]);
    }
    j++;
  }
  return res;
};
