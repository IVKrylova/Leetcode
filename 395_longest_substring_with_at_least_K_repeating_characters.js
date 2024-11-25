// 395. Longest Substring with At Least K Repeating Characters
// Hash Table, String, Divide and Conquer, Sliding Window

// Level - Medium

// Given a string s and an integer k, return the length of the longest substring of s such that
// the frequency of each character in this substring is greater than or equal to k.
// if no such substring exists, return 0.

// Example 1:
// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

// Example 2:
// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated
// 3 times.

// Constraints:
// 1 <= s.length <= 10^4
// s consists of only lowercase English letters.
// 1 <= k <= 10^5

const longestSubstring = function (s, k) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    let j = i;
    while (j < s.length) {
      if (arr[s.charCodeAt(j) - 97]) {
        arr[s.charCodeAt(j) - 97] += 1;
      } else {
        arr[s.charCodeAt(j) - 97] = 1;
      }
      if (isValid(arr, k) && j - i + 1 > res) {
        res = j - i + 1;
      }
      j++;
    }
  }
  return res;
};

const isValid = (arr, k) => {
  return arr.every((el) => el >= k || el === undefined);
};
