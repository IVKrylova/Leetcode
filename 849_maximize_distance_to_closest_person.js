// 849. Maximize Distance to Closest Person
// Array

// Level - Medium

// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith
// seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
// There is at least one empty seat, and at least one person sitting.
// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
// Return that maximum distance to the closest person.

// Example 1:
// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation:
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.

// Example 2:
// Input: seats = [1,0,0,0]
// Output: 3
// Explanation:
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.

// Example 3:
// Input: seats = [0,1]
// Output: 1

// Constraints:
// 2 <= seats.length <= 2 * 10^4
// seats[i] is 0 or 1.
// At least one seat is empty.
// At least one seat is occupied.

const maxDistToClosest = function (seats) {
  let maxZeroLength = 0;
  let count = 0;
  let start = 0;
  let startWithZero = 0;
  while (seats[start] === 0) {
    startWithZero++;
    start++;
  }
  for (let i = start; i < seats.length; i++) {
    if (seats[i] === 0) {
      count++;
    } else if (count > 0) {
      if (count > maxZeroLength) maxZeroLength = count;
      count = 0;
    }
  }
  if (startWithZero > Math.ceil(maxZeroLength / 2) && startWithZero > count) {
    return startWithZero;
  } else if (count > Math.ceil(maxZeroLength / 2)) {
    return count;
  } else {
    return Math.ceil(maxZeroLength / 2);
  }
};
