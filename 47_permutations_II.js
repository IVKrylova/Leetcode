// 47. Permutations II
// Array, Backtracking

// Level - Medium

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique
// permutations in any order.

// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Constraints:
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

const getPermutation = (cur, nums, res, set, indexes) => {
  if (nums.length === cur.length && !set.has(cur.join())) {
    set.add(cur.join());
    res.push([...cur]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (!indexes.includes(i)) {
      cur.push(nums[i]);
      indexes.push(i);
      getPermutation(cur, nums, res, set, indexes);
      cur.pop();
      indexes.pop();
    }
  }
};

const permuteUnique = function (nums) {
  const set = new Set();
  const res = [];
  getPermutation([], nums, res, set, []);
  return res;
};
