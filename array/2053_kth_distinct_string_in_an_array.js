const kthDistinct = function (arr, k) {
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i])) {
      hash.set(arr[i], hash.get(arr[i]) + 1);
    } else {
      hash.set(arr[i], 1);
    }
  }
  let count = 0;
  let res = "";
  hash.forEach((val, key) => {
    if (val === 1) {
      count += 1;
      if (count === k) {
        res = key;
        return;
      }
    }
  });
  return res;
};

kthDistinct(["d", "b", "c", "b", "c", "a"], 2);
