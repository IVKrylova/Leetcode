// 5. Longest Palindromic Substring
// Dynamic Programming, String, Two Pointers, Recursion, Sliding Window, Memoization, Array, Greedy,
// Iterator, String Matching, Matrix, Rolling Hash, Binary Tree, Binary Search, Math, Divide and Conquer,
// Hash Table, Queue, Breadth-First Search, Stack, Simulation, Sorting, Hash Function, Tree, Counting,
// Enumeration, Depth-First Search, Backtracking, Merge Sort, Brainteaser, Binary Indexed Tree, Ordered Map,
// Shortest Path, Suffix Array

// Level - Medium

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

const longestPalindrome = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] ? hash[s[i]].push(i) : (hash[s[i]] = [i]);
  }
  let indexes = [];
  for (const letter in hash) {
    if (hash[letter].length > 1) {
      const combinations = [];
      for (let i = 0; i < hash[letter].length; i++) {
        for (let j = i + 1; j < hash[letter].length; j++) {
          combinations.push([hash[letter][i], hash[letter][j]]);
        }
      }
      indexes = indexes.concat(combinations);
    }
  }
  indexes.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  for (let i = 0; i < indexes.length; i++) {
    let left = indexes[i][0];
    let right = indexes[i][1];
    while (s[left] === s[right] && right > left) {
      right--;
      left++;
    }
    if (left - right === 1 || left === right) {
      return s.substring(indexes[i][0], indexes[i][1] + 1);
    }
  }
  return s[0]
};

