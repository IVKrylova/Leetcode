// 1497. Check If Array Pairs Are Divisible by k
// Array, Hash Table, Counting

// Level - Medium

// Given an array of integers arr of even length n and an integer k.
// We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
// Return true If you can find a way to do that or false otherwise.

// Example 1:
// Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

// Example 2:
// Input: arr = [1,2,3,4,5,6], k = 7
// Output: true
// Explanation: Pairs are (1,6),(2,5) and(3,4).

// Example 3:
// Input: arr = [1,2,3,4,5,6], k = 10
// Output: false
// Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each
// with sum divisible by 10.

// Constraints:
// arr.length == n
// 1 <= n <= 10^5
// n is even.
// -10^9 <= arr[i] <= 10^9
// 1 <= k <= 10^5

const canArrange = function (arr, k) {
  const rest = [];
  arr.forEach((el) => rest.push(((el % k) + k) % k));
  const count = new Array(k).fill(0);
  rest.forEach((el) => (count[el] += 1));

  if (count[0] % 2 !== 0) return false;

  let i = 1;
  let j = k - 1;

  if (k % 2 !== 0) {
    while (i < j) {
      if (count[i] !== count[j]) return false;
      i++;
      j--;
    }
  } else {
    while (j - i > 1) {
      if (count[i] !== count[j]) return false;
      i++;
      j--;
    }
    if (count[i] % 2 !== 0) return false;
  }

  return true;
};
