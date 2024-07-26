var twoSum = function (numbers, target) {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    const x = target - numbers[i];
    if (set.has(x)) {
      return [numbers.indexOf(x) + 1, i + 1];
    } else {
      set.add(numbers[i]);
    }
  }
};
