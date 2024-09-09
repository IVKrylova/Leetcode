const findMaxLength = function (nums) {
  const sum = [nums[0] ? nums[0] : -1];
  const hash = { 0: -1 };
  hash[sum[0]] = 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + (nums[i] ? nums[i] : -1);
    if (hash[sum[i]] !== undefined) {
      const dist = i - hash[sum[i]];
      if (dist > res) res = dist;
    } else {
      hash[sum[i]] = i;
    }
  }

  return res;
};

