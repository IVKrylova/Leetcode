// 139. Word Break
// Array, Hash Table, String, Dynamic Programming, Trie, Memoization

// Level - Medium

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a
// space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:
// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

class Letter {
  constructor(val) {
    this.val = val;
    this.next = {};
    this.terminator = false;
  }

  findLetter(val) {
    return this.next[val];
  }

  addNext(letter) {
    this.next[letter.val] = letter;
  }
}

const buildTrie = (wordDict) => {
  const root = new Letter("");
  for (let i = 0; i < wordDict.length; i++) {
    let node = root;
    for (let j = 0; j < wordDict[i].length; j++) {
      let letter = node.findLetter(wordDict[i][j]);
      if (!letter) {
        letter = new Letter(wordDict[i][j]);
        node.addNext(letter);
      }
      node = letter;
      if (j === wordDict[i].length - 1) node.terminator = true;
    }
  }
  return root;
};

const dfs = (graph, start, n) => {
  const WHITE = -1;
  const BLACK = 1;
  const GREY = 0;
  const colors = new Array(n + 1).fill(WHITE);
  const stack = [start];
  while (stack.length > 0) {
    const v = stack.pop();
    colors[v] = GREY;
    if (graph[v]) {
      for (let i = 0; i < graph[v].length; i++) {
        if (colors[graph[v][i]] === WHITE) {
          stack.push(graph[v][i]);
        }
      }
    }
    colors[v] = BLACK;
  }
  return colors[n] === BLACK;
};

const wordBreak = function (s, wordDict) {
  const n = s.length;
  const trie = buildTrie(wordDict);
  const indexes = {};
  let i = 0;
  let node = trie;

  while (i < n) {
    let j = i;
    while (node && j < n) {
      node = node.findLetter(s[j]);
      if (node && node.terminator) {
        indexes[i] ? indexes[i].push(j + 1) : (indexes[i] = [j + 1]);
      }
      j++;
    }
    node = trie;
    i++;
    j = i;
  }

  return dfs(indexes, 0, n);
};
