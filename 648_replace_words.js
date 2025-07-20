// 648. Replace Words
// Array, Hash Table, String, Trie

// Level - Medium

// In English, we have a concept called root, which can be followed by some other word to form another
// longer word - let's call this word derivative. For example, when the root "help" is followed by the
// word "ful", we can form a derivative "helpful".
// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces,
// replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced
// by more than one root, replace it with the root that has the shortest length.
// Return the sentence after the replacement.

// Example 1:
// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

// Example 2:
// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"

// Constraints:
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 100
// dictionary[i] consists of only lower-case letters.
// 1 <= sentence.length <= 10^6
// sentence consists of only lower-case letters and spaces.
// The number of words in sentence is in the range [1, 1000]
// The length of each word in sentence is in the range [1, 1000]
// Every two consecutive words in sentence will be separated by exactly one space.
// sentence does not have leading or trailing spaces.

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
      if (j === wordDict[i].length - 1) {
        node.terminator = true;
      }
    }
  }

  return root;
};

const replaceWords = function (dictionary, sentence) {
  const trie = buildTrie(dictionary);
  const words = sentence.split(" ");
  let res = [];

  words.forEach((word) => {
    let node = trie.findLetter(word[0]);
    let cur = word[0];
    for (let i = 1; i < word.length; i++) {
      if (!node) break;

      if (node && node.terminator) {
        res.push(cur);
        break;
      }

      node = node.findLetter(word[i]);
      cur += word[i];
    }

    if (!node || (word.length === 1 && node) || !node.terminator) {
      res.push(word);
    }
  });

  return res.join(" ");
};
