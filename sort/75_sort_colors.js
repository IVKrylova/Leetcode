const compare = (a, b) => {
  return b > a;
};

const sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    const el = nums[i];
    let j = i;
    while (j > 0 && compare(nums[j], nums[j - 1])) {
      const temp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = temp;
      j--;
    }
    nums[j] = el;
  }
  return nums;
};

