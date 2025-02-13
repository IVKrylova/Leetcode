// 40. Combination Sum II
// Array, Backtracking

// Level - Medium

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique
// combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

const getCombination = (set, res, cur, ind, candidates, target) => {
  if (cur.reduce((sum, el) => (sum += el), 0) === target) {
    const key = cur.join("");
    if (!set.has(key)) {
      set.add(key);
      res.push([...cur]);
    }
  }
  if (cur.reduce((sum, el) => (sum += el), 0) > target) return;

  for (let i = ind; i < candidates.length; i++) {
    if (i > ind && candidates[i] === candidates[i - 1]) continue;
    cur.push(candidates[i]);
    getCombination(set, res, cur, i + 1, candidates, target);
    cur.pop();
  }
};

const combinationSum2 = function (candidates, target) {
  const set = new Set();
  const res = [];
  candidates.sort((a, b) => a - b);
  getCombination(set, res, [], 0, candidates, target);
  return res;
};
