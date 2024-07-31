var singleNumber = function (nums) {
  const arr = nums.sort((a, b) => b - a);
  let i = 0;
  while (i < nums.length) {
    if (arr[i] == arr[i + 1]) {
      i += 2;
    } else {
      return arr[i];
    }
  }
};
