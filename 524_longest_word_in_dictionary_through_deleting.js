// 524. Longest Word in Dictionary through Deleting
// Array, Two Pointers, String, Sorting

// Level - Medium

// Given a string s and a string array dictionary, return the longest string in the dictionary
// that can be formed by deleting some of the given string characters. If there is more than one
// possible result, return the longest word with the smallest lexicographical order. If there is
// no possible result, return the empty string.

// Example 1:
// Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// Output: "apple"

// Example 2:
// Input: s = "abpcplea", dictionary = ["a","b","c"]
// Output: "a"

// Constraints:
// 1 <= s.length <= 1000
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 1000
// s and dictionary[i] consist of lowercase English letters.

const compare = (a, b) => {
  if (a.count === b.count) {
    return a.word < b.word;
  }
  return a.count > b.count;
};

const findLongestWord = function (s, dictionary) {
  for (let i = 0; i < dictionary.length; i++) {
    let count = 0;
    let j = 0;
    let k = 0;
    const arr = dictionary[i].split("");
    while (j < s.length && k < arr.length) {
      if (arr[k] === s[j]) {
        count++;
        j++;
        k++;
      } else {
        j++;
      }
    }
    dictionary[i] = {
      word: dictionary[i],
      count: count === dictionary[i].length ? count : 0,
    };
  }

  for (let i = 1; i < dictionary.length; i++) {
    const el = dictionary[i];
    let j = i;
    while (j > 0 && compare(dictionary[j], dictionary[j - 1])) {
      const temp = dictionary[j - 1];
      dictionary[j - 1] = dictionary[j];
      dictionary[j] = temp;
      j--;
    }
    dictionary[j] = el;
  }
  return dictionary[0].count === 0 ? "" : dictionary[0].word;
};
