const majorityElement = function (nums) {
  const n = Math.floor(nums.length / 2);
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]] = hash[nums[i]] + 1;
    } else {
      hash[nums[i]] = 1;
    }
    if (hash[nums[i]] > n) return nums[i];
  }
};

