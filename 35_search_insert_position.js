// 35. Search Insert Position
// Array, Binary Search

// 

const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) return i;
  }
  return nums.length;
};
