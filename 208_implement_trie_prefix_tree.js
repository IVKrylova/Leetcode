// 208. Implement Trie (Prefix Tree)
// Hash Table, String, Design, Trie

// Level - Medium

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and
// retrieve keys in a dataset of strings. There are various applications of this data structure, such as
// autocomplete and spellchecker.
// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before),
// and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has
// the prefix prefix, and false otherwise.

// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:
// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

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

class Trie {
  constructor() {
    this.root = new Letter("");
  }
}

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let j = 0; j < word.length; j++) {
    let letter = node.findLetter(word[j]);
    if (!letter) {
      letter = new Letter(word[j]);
      node.addNext(letter);
    }
    node = letter;
    if (j === word.length - 1) node.terminator = true;
  }
};

Trie.prototype.search = function (word) {
  let i = 0;
  let node = this.root;
  while (i < word.length && node) {
    const el = node.findLetter(word[i]);
    if (el) {
      node = el;
    } else {
      return false;
    }
    i++;
  }
  return node.terminator;
};

Trie.prototype.startsWith = function (prefix) {
  let i = 0;
  let node = this.root;
  while (i < prefix.length && node) {
    const el = node.findLetter(prefix[i]);
    if (el) {
      node = el;
    } else {
      return false;
    }
    i++;
  }
  return true;
};
