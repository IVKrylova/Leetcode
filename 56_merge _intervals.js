// 56. Merge Intervals
// Array, Sorting

// Level - Medium

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping
// intervals, and return an array of the non-overlapping intervals that cover all the intervals
// in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4

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
