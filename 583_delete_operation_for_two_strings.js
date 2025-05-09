// 583. Delete Operation for Two Strings
// String, Dynamic Programming

// Level - Medium

// Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
// In one step, you can delete exactly one character in either string.

// Example 1:
// Input: word1 = "sea", word2 = "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

// Example 2:
// Input: word1 = "leetcode", word2 = "etco"
// Output: 4

// Constraints:
// 1 <= word1.length, word2.length <= 500
// word1 and word2 consist of only lowercase English letters.

const minDistance = function (word1, word2) {
  const dp = Array.from(
    { length: word1.length + 1 },
    () => new Array(word2.length + 1)
  );
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return (
    word1.length -
    dp[word1.length][word2.length] +
    (word2.length - dp[word1.length][word2.length])
  );
};
