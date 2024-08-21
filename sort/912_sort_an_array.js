const sortArray = function (nums) {
  if (nums.length === 1) return nums;
  const left = sortArray(nums.slice(0, Math.floor(nums.length / 2)));
  const right = sortArray(nums.slice(Math.floor(nums.length / 2)));

  let l = 0,
    r = 0,
    k = 0;
  const res = [];
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      res[k] = left[l];
      l++;
    } else {
      res[k] = right[r];
      r++;
    }
    k++;
  }
  while (l < left.length) {
    res[k] = left[l];
    l++;
    k++;
  }
  while (r < right.length) {
    res[k] = right[r];
    r++;
    k++;
  }
  return res;
};
