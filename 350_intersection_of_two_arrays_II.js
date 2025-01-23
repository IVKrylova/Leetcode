// 350. Intersection of Two Arrays II
// Array, Hash Table, Two Pointers, Binary Search, Sorting

// Level - Easy

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the
// result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

const intersect = function (nums1, nums2) {
  const res = [];
  const hash = {};
  for (let i = 0; i < nums1.length; i++) {
    hash[nums1[i]] ? (hash[nums1[i]] += 1) : (hash[nums1[i]] = 1);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]] && hash[nums2[i]] > 0) {
      res.push(nums2[i]);
      hash[nums2[i]] -= 1;
    }
  }
  return res;
};
