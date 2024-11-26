// 205. Isomorphic Strings
// Hash Table, String

// Level - Easy

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving
// the order of characters. No two characters may map to the same character, but a character
// may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Explanation:
// The strings s and t can be made identical by:
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Explanation:
// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Constraints:
// 1 <= s.length <= 5 * 10^4
// t.length == s.length
// s and t consist of any valid ascii character.

const isIsomorphic = function (s, t) {
  const hashS = {};
  for (let i = 0; i < s.length; i++) {
    if (hashS[s[i]]) {
      hashS[s[i]][0] += 1;
      hashS[s[i]][1] += i;
    } else {
      hashS[s[i]] = [];
      hashS[s[i]][0] = 1;
      hashS[s[i]][1] = `${i}`;
    }
  }
  const hashSInd = {};
  for (let key in hashS) {
    hashSInd[hashS[key][1]] = hashS[key][0];
  }
  const hashT = {};
  for (let i = 0; i < t.length; i++) {
    if (hashT[t[i]]) {
      hashT[t[i]][0] += 1;
      hashT[t[i]][1] += i;
    } else {
      hashT[t[i]] = [];
      hashT[t[i]][0] = 1;
      hashT[t[i]][1] = `${i}`;
    }
  }
  const hashTInd = {};
  for (let key in hashT) {
    hashTInd[hashT[key][1]] = hashT[key][0];
  }
  for (let key in hashSInd) {
    if (hashTInd[key] === hashSInd[key]) {
      delete hashTInd[key];
    }
  }

  return Object.values(hashTInd).length === 0;
};
