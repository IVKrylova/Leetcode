// 187. Repeated DNA Sequences
// Hash Table, String, Bit Manipulation, Sliding Window, Rolling Hash, Hash Function

// Level - Medium

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G',
// and 'T'.
// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.
// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences
// (substrings) that occur more than once in a DNA molecule. You may return the answer in
// any order.

// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

// Constraints:
// 1 <= s.length <= 10^5
// s[i] is either 'A', 'C', 'G', or 'T'.

const getHash = (s, LONG) => {
  const hash = {};
  let firstHash = 0;
  for (let i = 0; i < LONG; i++) {
    firstHash += s.charCodeAt(i);
  }
  hash[firstHash] = [0];
  for (let i = 1; i < s.length - LONG + 1; i++) {
    firstHash = firstHash - s.charCodeAt(i - 1) + s.charCodeAt(i + LONG - 1);
    if (hash[firstHash]) {
      hash[firstHash].push(i);
    } else {
      hash[firstHash] = [i];
    }
  }
  return hash;
};

const getStr = (s, LONG, i) => {
  let str = "";
  for (let j = 0; j < LONG; j++) {
    str += s[i + j];
  }
  return str;
};

const findRepeatedDnaSequences = function (s) {
  const LONG = 10;
  const hash = getHash(s, LONG);
  const map = {};
  for (const key in hash) {
    if (hash[key].length > 1) {
      for (let i = 0; i < hash[key].length; i++) {
        const str = getStr(s, LONG, hash[key][i]);
        map[str] = (map[str] || 0) + 1;
      }
    }
  }
  const res = [];
  for (const key in map) {
    if (map[key] > 1) res.push(key);
  }

  return res;
};
