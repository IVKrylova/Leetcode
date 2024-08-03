const canBeEqual = function (target, arr) {
  const hash = {};
  for (let i = 0; i < target.length; i++) {
    if (hash[target[i]]) {
      hash[target[i]] = hash[target[i]] + 1;
    } else {
      hash[target[i]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      return false;
    } else if (hash[arr[i]] === 1) {
      delete hash[arr[i]];
    } else {
      hash[arr[i]] = hash[arr[i]] - 1;
    }
  }
  return Object.keys(hash).length === 0;
};

canBeEqual(
  [
    630, 262, 255, 927, 255, 924, 310, 872, 492, 750, 376, 651, 312, 445, 238,
    330, 149, 604, 714, 48, 852, 444,
  ],
  [
    444, 927, 48, 924, 262, 376, 852, 238, 872, 630, 310, 492, 149, 255, 651,
    255, 750, 604, 445, 330, 312, 714,
  ]
);
