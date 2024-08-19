const sort = (intervals, compare) => {
  for (let i = 1; i < intervals.length; i++) {
    const el = intervals[i];
    let j = i;
    while (j > 0 && compare(intervals[j], intervals[j - 1])) {
      const temp = intervals[j - 1];
      intervals[j - 1] = intervals[j];
      intervals[j] = temp;
      j--;
    }
    intervals[j] = el;
  }
  return intervals;
};

const compare = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] < b[1];
  }
  return a[0] < b[0];
};

const merge = function (intervals) {
  const sorted = sort(intervals, compare);
  const arr = [sorted[0]];
  let i = 1;
  while (i < sorted.length) {
    if (arr[arr.length - 1][1] >= sorted[i][1]) {
      i++;
    } else if (arr[arr.length - 1][1] >= sorted[i][0]) {
      arr[arr.length - 1] = [arr[arr.length - 1][0], sorted[i][1]];
      i++;
    } else {
      arr.push(sorted[i]);
      i++;
    }
  }
  return arr;
};

