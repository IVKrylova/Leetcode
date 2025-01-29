// 516. Longest Palindromic Subsequence
// String, Dynamic Programming

// Level - Medium

// Given a string s, find the longest palindromic subsequence's length in s.
// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without
// changing the order of the remaining elements.

// Example 1:
// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".

// Example 2:
// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".

// Constraints:
// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

const longestPalindromeSubseq = function (s) {
  const reversedS = s.split("").reverse().join("");
  const dp = Array.from(
    { length: s.length + 1 },
    () => new Array(s.length + 1)
  );
  for (let i = 0; i <= s.length; i++) {
    dp[0][i] = 0;
    dp[i][0] = 0;
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (s[i - 1] === reversedS[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[s.length][s.length];
};
