const compare = (a, b) => {
  const [i1, j1, k1, l1] = a;
  const [i2, j2, k2, l2] = b;

  if (i1 > i2) {
    return 1;
  } else if (i1 < i2) {
    return -1;
  } else if (j1 > j2) {
    return 1;
  } else if (j1 < j2) {
    return -1;
  } else if (k1 > k2) {
    return 1;
  } else if (k1 < k2) {
    return -1;
  } else if (l1 > l2) {
    return 1;
  } else if (l1 < l2) {
    return -1;
  } else {
    return 0;
  }
};

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  const twoSum = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (twoSum[sum] !== undefined && twoSum[sum].every((el) => el[0] !== i)) {
        twoSum[sum].push([i, j]);
      } else if (twoSum[sum] === undefined) {
        twoSum[sum] = [[i, j]];
      }
    }
  }

  const res = new Set();

  for (let i = 2; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = target - nums[i] - nums[j];
      if (twoSum[diff] !== undefined) {
        twoSum[diff].forEach((el) => {
          if (el[1] < i) {
            res.add(`${nums[el[0]]} ${nums[el[1]]} ${nums[i]} ${nums[j]}`);
          }
        });
      }
    }
  }

  return Array.from(res).map((el) => el.split(" ").map((n) => Number(n)));
};
