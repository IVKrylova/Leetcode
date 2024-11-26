// 567. Permutation in String
// Hash Table, Two Pointers, String, Sliding Window

// Level - Medium

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false
// otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:
// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.

const getHash = (s1) => {
  const hash = {};
  for (let i = 0; i < s1.length; i++) {
    hash[s1[i]] = (hash[s1[i]] || 0) + 1;
  }
  return hash;
};

const checkInclusion = function (s1, s2) {
  const hash = getHash(s1);
  let start = 0;
  let end = s1.length;

  while (end <= s2.length) {
    const current = { ...hash };
    const str = s2.slice(start, end);
    for (let i = 0; i < str.length; i++) {
      if (!current[str[i]]) {
        break;
      } else {
        current[str[i]] -= 1;
        if (current[str[i]] === 0) delete current[str[i]];
      }
    }
    if (Object.keys(current).length === 0) return true;
    start++;
    end++;
  }
  return false;
};
