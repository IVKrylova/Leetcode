const comparator = (a, b) => {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] === b[1] && a[0] < b[0]) {
    return 1;
  } else if (a[1] === b[1] && a[0] === b[0]) {
    return 0;
  } else {
    return -1;
  }
};

const partition = (arr, pivot) => {
  const left = [];
  const center = [];
  const rigth = [];
  for (let i = 0; i < arr.length; i++) {
    if (comparator(arr[i], pivot) === 1) {
      left.push(arr[i]);
    } else if (comparator(arr[i], pivot) === 0) {
      center.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [left, center, rigth];
};

const sort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const [left, center, rigth] = partition(arr, pivot);
  return sort(left).concat(center).concat(sort(rigth));
};

const topKFrequent = function (words, k) {
  const hash = {};
  for (let i = 0; i < words.length; i++) {
    hash[words[i]] = hash[words[i]] ? hash[words[i]] + 1 : 1;
  }
  const entries = Object.entries(hash);
  const sorted = sort(entries);

  return sorted.slice(0, k).map((el) => el[0]);
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);
