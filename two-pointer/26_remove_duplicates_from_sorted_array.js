var removeDuplicates = function (nums) {
  const res = [nums[0]];
  let left = 0;
  let right = left + 1;
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      res.push(nums[right]);
      left = right;
      right++;
    }
  }
  const k = res.length;
  for (let i = 0; i < k; i++) {
    nums[i] = res[i];
  }
  return k;
};

