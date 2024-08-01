const topKFrequent = function (nums, k) {
  const list = {};
  for (let i = 0; i < nums.length; i++) {
    list[nums[i]] = list[nums[i]] ? list[nums[i]] + 1 : 1;
  }
  const values = Object.keys(list)
    .map((key) => list[key])
    .sort((a, b) => b - a);
  const res = [];
  for (let i = 0; i < k; i++) {
    const key = Object.keys(list).find((el) => list[el] === values[i]);
    res.push(key);
    list[key] = 0;
  }
  return res;
};

