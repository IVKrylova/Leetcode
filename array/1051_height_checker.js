const heightChecker = function (heights) {
  const arr = heights.map((el) => el).sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== arr[i]) count++;
  }
  return count;
};

heightChecker([1,1,4,2,1,3])