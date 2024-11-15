// 30. Substring with Concatenation of All Words
// Hash Table, String, Sliding Window

// Level - Hard

// You are given a string s and an array of strings words. All the strings of words are of
// the same length.
// A concatenated string is a string that exactly contains all the strings of any permutation
// of words concatenated.
// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab",
// "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string
// because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can
// return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation:
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which
// is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which
// is a permutation of words.

// Example 2:
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Explanation:
// There is no concatenated substring.

// Example 3:
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
// Explanation:
// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

// Constraints:
// 1 <= s.length <= 10^4
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

class Node {
  constructor(val) {
    this.val = val;
    this.terminator = false;
    this.children = {};
    this.indexes = [];
  }

  findNode(val) {
    const el = this.children[val];
    return el ? el : null;
  }

  addChild(node) {
    this.children[node.val] = node;
  }
}

const makeTrie = (words) => {
  const trie = new Node("");
  for (let i = 0; i < words.length; i++) {
    let node = trie;
    for (let j = 0; j < words[i].length; j++) {
      const el = node.findNode(words[i][j]);
      if (el) {
        node = el;
      } else {
        const newNode = new Node(words[i][j]);
        node.addChild(newNode);
        node = newNode;
      }
    }
    node.terminator = true;
    node.indexes.push(i);
  }
  return trie;
};

const findSubstring = function (s, words) {
  const trie = makeTrie(words);
  const entries = [];
  let i = 0;
  while (i < s.length) {
    let node = trie;
    let j = i;
    while (node && !node.terminator) {
      node = node.findNode(s[j]);
      j++;
    }
    if (node) entries[i] = node.indexes;
    i = j;
  }
  const res = [];
  i = 0;
  while (i < entries.length) {
    let j = i;
    while (!entries[j]) {
      j++;
    }
    const start = j;
    const set = new Set();
    while (j < start + s.length) {
      if (entries[j]) set.add(...entries[j]);
			j++
    }
    if (set.size === words.length) res.push(start);
    i = start + 1;
  }
	return res
};

findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]); // [6,9,12]

// findSubstring("barfoothefoobarmanbar", ["bar","foo"]) // [0,9]

// findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]); // []
