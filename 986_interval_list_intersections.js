// 986. Interval List Intersections
// Array, Two Pointers

// Level - Medium

// You are given two lists of closed intervals, firstList and secondList, where
// firstList[i] = [start[i], end[i]] and secondList[j] = [start[j], end[j]]. Each list of
// intervals is pairwise disjoint and in sorted order.
// Return the intersection of these two interval lists.
// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
// The intersection of two closed intervals is a set of real numbers that are either empty or
// represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is
// [2, 3].

// Example 1:
// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// Example 2:
// Input: firstList = [[1,3],[5,9]], secondList = []
// Output: []

// Constraints:
// 0 <= firstList.length, secondList.length <= 1000
// firstList.length + secondList.length >= 1
// 0 <= start[i] < end[i] <= 109
// end[i] < start[i+1]
// 0 <= start[j] < end[j] <= 109
// end[j] < start[j+1]

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function (firstList, secondList) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    if (firstList[i][0] > secondList[j][1]) {
      j++;
    } else if (secondList[j][0] > firstList[i][1]) {
      i++;
    } else if (
      firstList[i][0] >= secondList[j][0] &&
      firstList[i][1] <= secondList[j][1]
    ) {
      res.push(firstList[i]);
      i++;
    } else if (
      secondList[j][0] >= firstList[i][0] &&
      secondList[j][1] <= firstList[i][1]
    ) {
      res.push(secondList[j]);
      j++;
    } else if (
      secondList[j][0] >= firstList[i][0] &&
      firstList[i][1] <= secondList[j][1]
    ) {
      res.push([secondList[j][0], firstList[i][1]]);
      i++;
    } else if (
      firstList[i][0] >= secondList[j][0] &&
      secondList[j][1] <= firstList[i][1]
    ) {
      res.push([firstList[i][0], secondList[j][1]]);
      j++;
    } else if (
      firstList[i][1] === secondList[j][0] ||
      secondList[j][0] === firstList[i][1]
    ) {
      res.push([firstList[i][1], secondList[j][0]]);
      i++;
      j++;
    } else {
      i++;
      j++;
    }
  }

  return res;
};
