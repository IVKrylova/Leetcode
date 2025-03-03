// 451. Sort Characters By Frequency
// Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting

// Level - Medium

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character
// is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// Constraints:
// 1 <= s.length <= 5 * 10^5
// s consists of uppercase and lowercase English letters and digits.

const partition = (arr, indPivot) => {
  const left = [];
  const center = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < arr[indPivot][1]) {
      right.push(arr[i]);
    } else if (arr[i][1] === arr[indPivot][1]) {
      center.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [left, center, right];
};

const quiqSort = (arr) => {
  if (arr.length < 2) return arr;
  const indPivot = Math.floor(Math.random() * arr.length);
  const [left, center, right] = partition(arr, indPivot);
  return quiqSort(left).concat(center).concat(quiqSort(right));
};

const frequencySort = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] ? (hash[s[i]] += 1) : (hash[s[i]] = 1);
  }
  const entries = Object.entries(hash);
  const sortedArr = quiqSort(entries);
  const res = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const key = sortedArr[i][0];
    const val = sortedArr[i][1];
    let count = 0;
    while (count < val) {
      res.push(key);
      count++;
    }
  }
  return res.join("");
};

