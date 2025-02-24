// 541. Reverse String II
// Two Pointers, String

// Level - Easy

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start
// of the string.
// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal
// to k characters, then reverse the first k characters and leave the other as original.

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

// Constraints:
// 1 <= s.length <= 10^4
// s consists of only lowercase English letters.
// 1 <= k <= 10^4

const reverseStr = function (s, k) {
  let res = "";
  let i = 0;
  while (i < s.length) {
    let cur = i;
    while (cur < k + i && cur < s.length) {
      cur++;
    }
    for (let j = cur - 1; j >= i; j--) {
      res += s[j];
    }
		res += s.substring(cur, cur + k)
    i = cur + k;
  }
  if (res.length < s.length) res += s.substring(i);
  return res;
};

