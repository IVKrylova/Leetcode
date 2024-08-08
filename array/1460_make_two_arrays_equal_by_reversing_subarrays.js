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

