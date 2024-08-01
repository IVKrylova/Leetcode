const containsDuplicate = function (nums) {
  const list = {};
  for (let i = 0; i < nums.length; i++) {
    if (list[nums[i]]) return true;
    list[nums[i]] = true;
  }
  return false;
};

containsDuplicate([1,2,3,1])