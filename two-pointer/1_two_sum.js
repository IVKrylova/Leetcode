var twoSum = function (nums, target) {
  const sortedArr = [...nums].sort((a, b) => b - a);
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (sortedArr[left] + sortedArr[right] === target) {
        const first = sortedArr[left];
        const second = sortedArr[right];
        if (first === second) {
          return [nums.indexOf(first), nums.lastIndexOf(second)];
        } else {
          return [
            nums.indexOf(sortedArr[left]),
            nums.indexOf(sortedArr[right]),
          ];
        }
      }
    }
  }
};
