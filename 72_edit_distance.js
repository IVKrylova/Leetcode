// 72. Edit Distance
// String, Dynamic Programming

// Level - Medium

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to
// word2.
// You have the following three operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:
// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

const replace = (prev, cost) => prev + cost;

const insert = (dp, i, cost) => dp[i] + cost;

const remove = (dp, i, cost) => dp[i - 1] + cost;

const minDistance = function (word1, word2) {
  const dp = new Array(word1.length + 1);
  for (let i = 0; i <= word1.length; i++) {
    dp[i] = i;
  }

  for (let i = 1; i <= word2.length; i++) {
    dp[0] = i;
    let prev = i - 1;
    for (let j = 1; j <= word1.length; j++) {
      const curVal = dp[j];
      if (word2[i - 1] !== word1[j - 1]) {
        dp[j] = Math.min(replace(prev, 1), insert(dp, j, 1), remove(dp, j, 1));
      } else {
        dp[j] = prev;
      }
      prev = curVal;
    }
  }

  return dp[word1.length];
};
