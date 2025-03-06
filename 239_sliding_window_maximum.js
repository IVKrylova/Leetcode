// 239. Sliding Window Maximum
// Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue

// Level - Hard

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left
// of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves
// right by one position.
// Return the max sliding window.

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length

class Heap {
  constructor() {
    this.heap = [null];
  }

  #swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  #shiftUp(ind) {
    if (ind === 1) return;
    const parentInd = Math.floor(ind / 2);
    if (this.heap[parentInd] < this.heap[ind]) {
      this.#swap(parentInd, ind);
      this.#shiftUp(parentInd);
    }
  }

  #shiftDown(ind) {
    const left = ind * 2;
    const right = ind * 2 + 1;
    if (left > this.heap.length - 1) return;
    const maxInd =
      right < this.heap.length && this.heap[right] > this.heap[left]
        ? right
        : left;
    if (this.heap[ind] < this.heap[maxInd]) {
      this.#swap(ind, maxInd);
      this.#shiftDown(maxInd);
    }
  }

  addEl(val) {
    this.heap.push(val);
    this.#shiftUp(this.heap.length - 1);
  }

  #findEl(val) {
    let i = 1;
    while (this.heap[i] !== val) {
      i++;
    }
    return i;
  }

  deleteEl(val) {
    const ind = this.#findEl(val);
    const min = this.heap.pop();
    if (min !== val) {
      this.heap[ind] = min;
      if (ind > 1 && min > this.heap[Math.floor(ind / 2)]) {
        this.#shiftUp(ind);
      } else {
        this.#shiftDown(ind);
      }
    }
  }

  getMax() {
    return this.heap[1];
  }
}

const maxSlidingWindow = function (nums, k) {
  const heap = new Heap();
  for (let i = 0; i < k; i++) {
    heap.addEl(nums[i]);
  }
  const res = [];
  res.push(heap.getMax());
  if (k === nums.length) return res;
  heap.deleteEl(nums[0]);
  let i = 1;
  let j = k;
  while (j < nums.length) {
    heap.addEl(nums[j]);
    res.push(heap.getMax());
    heap.deleteEl(nums[i]);
    i++;
    j++;
  }
  return res;
};
