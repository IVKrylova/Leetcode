// 347. Top K Frequent Elements
// Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting,
// Quickselect

// Level - Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may
// return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

const topKFrequent = function (nums, k) {
  const list = {};
  for (let i = 0; i < nums.length; i++) {
    list[nums[i]] = list[nums[i]] ? list[nums[i]] + 1 : 1;
  }
  const values = Object.keys(list)
    .map((key) => list[key])
    .sort((a, b) => b - a);
  const res = [];
  for (let i = 0; i < k; i++) {
    const key = Object.keys(list).find((el) => list[el] === values[i]);
    res.push(key);
    list[key] = 0;
  }
  return res;
};
