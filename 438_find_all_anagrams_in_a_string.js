// 438. Find All Anagrams in a String
// Hash Table, String, Sliding Window

// Level - Medium

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the
// answer in any order.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:
// 1 <= s.length, p.length <= 3 * 10^4
// s and p consist of lowercase English letters.

const getMap = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? (map[s[i]] += 1) : (map[s[i]] = 1);
  }
  return map;
};

const findAnagrams = function (s, p) {
  const indexes = [];
  const map = getMap(p);
  const curMap = getMap(s.substring(0, p.length));
  const diff = new Map();

  for (const key in curMap) {
    if (!map[key]) {
      diff.set(key, curMap[key]);
    } else if (map[key] !== curMap[key]) {
      diff.set(key, curMap[key] - map[key]);
    }
  }

  for (const key in map) {
    if (!diff.has(key) && !curMap[key]) {
      diff.set(key, -map[key]);
    }
  }

  let i = 1;

  if (diff.size === 0) indexes.push(0);

  while (i < s.length - p.length + 1) {
    diff.has(s[i - 1])
      ? diff.set(s[i - 1], diff.get(s[i - 1]) - 1)
      : diff.set(s[i - 1], -1);
    if (diff.get(s[i - 1]) === 0) diff.delete(s[i - 1]);

    diff.has(s[i + p.length - 1])
      ? diff.set(s[i + p.length - 1], diff.get(s[i + p.length - 1]) + 1)
      : diff.set(s[i + p.length - 1], 1);
    if (diff.get(s[i + p.length - 1]) === 0) diff.delete(s[i + p.length - 1]);

    if (diff.size === 0) indexes.push(i);
    i++;
  }

  return indexes;
};
