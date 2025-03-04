// 128. Longest Consecutive Sequence
// Array, Hash Table, Union Find

// Level - Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Example 3:
// Input: nums = [1,0,1,2]
// Output: 3

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

const longestConsecutive = function (nums) {
  const set = new Set(nums);
  const map = new Map();
  while (set.size > 0) {
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        let count = 0;
        let cur = nums[i];
        while (set.has(cur)) {
          count++;
          set.delete(cur);
          cur += 1;
        }
        map.set(nums[i], count);
      }
    }
  }
  map.forEach((count, num) => {
    if (map.has(count + num)) {
      map.set(num, count + map.get(count + num));
      map.delete(num + count);
    }
  });
  let res = 0;
  map.forEach((count, num) => {
    if (count > res) res = count;
  });
  return res;
};
