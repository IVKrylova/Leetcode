var rotate = function (nums, k) {
  if (k === nums.length) return nums;
  let n = k;
  
  if (k > nums.length) {
    n = k % nums.length;
  }
  const res = [];
  for (let i = nums.length - n; i < nums.length; i++) {
    res.push(nums[i]);
  }
  for (let i = 0; i < nums.length - n; i++) {
    res.push(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
  return nums;
};

