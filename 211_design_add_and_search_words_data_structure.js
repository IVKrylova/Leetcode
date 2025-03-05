// 211. Design Add and Search Words Data Structure
// String, Depth-First Search, Design, Trie

// Level - Medium

// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise.
// word may contain dots '.' where dots can be matched with any letter.

// Example:
// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]
// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

// Constraints:
// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 104 calls will be made to addWord and search.

class Letter {
  constructor(val, terminator = false) {
    this.val = val;
    this.terminator = terminator;
    this.children = [];
  }
}

class WordDictionary {
  constructor() {
    this.root = new Letter("");
  }

  #findLetter(val, node) {
    return node.children.find((letter) => letter.val === val);
  }

  #isEmpty() {
    return this.root.children.length === 0;
  }

  addWord(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const el = this.#findLetter(word[i], node);
      if (el) {
        node = el;
        if (i === word.length - 1) el.terminator = true;
      } else {
        const letter = new Letter(word[i], i === word.length - 1);
        node.children.push(letter);
        node = letter;
      }
    }
  }

  search(word) {
    if (this.#isEmpty()) return false;
    let i = 0;
    let stack = [this.root];
    while (i < word.length) {
      const cur = [...stack];
      stack = [];
      if (word[i] !== ".") {
        while (cur.length > 0) {
          const el = this.#findLetter(word[i], cur.pop());
          if (i !== word.length - 1) {
            if (el) stack.push(el);
          } else {
            if (el && el.terminator) stack.push(el);
          }
        }
        if (stack.length === 0) return false;
      } else {
        while (cur.length > 0) {
          const el = cur.pop();
          stack.push(...el.children);
        }
        if (i === word.length - 1) stack = stack.filter((el) => el.terminator);
        if (stack.length === 0) return false;
      }
      i++;
    }
    return true;
  }
}
