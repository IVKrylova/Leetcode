// 974. Subarray Sums Divisible by K
// Array, Hash Table, Prefix Sum

// Level - Medium

// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:
// Input: nums = [5], k = 9
// Output: 0

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -10^4 <= nums[i] <= 10^4
// 2 <= k <= 10^4

const subarraysDivByK = function (nums, k) {
  if (nums.length === 1) {
    return nums[0] % k === 0 ? 1 : 0;
  }
  const hashSum = { 0: 1 };
  let i = 0;
  let res = 0;
  let prefixSum = 0;
  while (i < nums.length) {
    prefixSum += nums[i];
    const rest = prefixSum % k < 0 ? (prefixSum % k) + k : prefixSum % k;
    if (hashSum[rest]) res += hashSum[rest];
    hashSum[rest] ? (hashSum[rest] += 1) : (hashSum[rest] = 1);
    i++;
  }
  return res;
};

subarraysDivByK([0, -5], 10);
