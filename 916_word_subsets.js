// 916. Word Subsets
// Array, Hash Table, String

// Level - Medium

// You are given two string arrays words1 and words2.
// A string b is a subset of string a if every letter in b occurs in a including multiplicity.
// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.
// Return an array of all the universal strings in words1. You may return the answer in any order.

// Example 1:
// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
// Output: ["facebook","google","leetcode"]

// Example 2:
// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lc","eo"]
// Output: ["leetcode"]

// Example 3:
// Input: words1 = ["acaac","cccbb","aacbb","caacc","bcbbb"], words2 = ["c","cc","b"]
// Output: ["cccbb"]

// Constraints:

// 1 <= words1.length, words2.length <= 10^4
// 1 <= words1[i].length, words2[i].length <= 10
// words1[i] and words2[i] consist only of lowercase English letters.
// All the strings of words1 are unique.

const checkLetters = (map, word) => {
  for (let i = 0; i < word.length; i++) {
    if (map[word[i]] === 1) {
      delete map[word[i]];
    } else if (map[word[i]]) {
      map[word[i]] -= 1;
    }

    if (Object.keys(map).length === 0) return true;
  }

  return false;
};

const wordSubsets = function (words1, words2) {
  const map = {};
  const uniqueWords2 = new Set(words2);
  uniqueWords2.forEach((word) => {
    const cur = {};
    for (let j = 0; j < word.length; j++) {
      cur[word[j]] ? (cur[word[j]] += 1) : (cur[word[j]] = 1);
    }
    for (const letter in cur) {
      if (!map[letter] || cur[letter] > map[letter]) {
        map[letter] = cur[letter];
      }
    }
  });

  return words1.filter((word) => checkLetters({ ...map }, word));
};

