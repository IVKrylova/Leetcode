var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) k++;
  }
  let l = 0;
  let r = l + 1;
  while (r < nums.length) {
    if (nums[l] !== val) {
      l++;
      r++;
    } else {
      if (nums[r] !== val) {
        nums[l] = nums[r];
        nums[r] = val;
        l++;
        r++;
      } else {
        r++;
      }
    }
  }
  return k;
};
