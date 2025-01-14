// 322. Coin Change
// Array, Dynamic Programming, Breadth-First Search

// Level - Medium

// You are given an integer array coins representing coins of different denominations and an integer amount
// representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be
// made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10^4

const coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  const dp = Array.from({ length: coins.length }, () => new Array(amount + 1));
  for (let i = 0; i < coins.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (
        dp[i][j - coins[i]] !== undefined &&
        dp[i - 1] &&
        dp[i - 1][j] !== undefined
      ) {
        dp[i][j] = Math.min(dp[i][j - coins[i]] + 1, dp[i - 1][j]);
      } else if (dp[i][j - coins[i]] !== undefined) {
        dp[i][j] = dp[i][j - coins[i]] + 1;
      } else if (dp[i - 1] && dp[i - 1][j] !== undefined) {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[coins.length - 1][amount] === undefined
    ? -1
    : dp[coins.length - 1][amount];
};
