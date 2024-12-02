// 1046. Last Stone Weight
// Array, Heap (Priority Queue)

// Level - Easy

// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and
// smash them together. Suppose the heaviest two stones have weights x and y with x <= y.
// The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight
// y - x.
// At the end of the game, there is at most one stone left.
// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last
// stone.

// Example 2:
// Input: stones = [1]
// Output: 1

// Constraints:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

class Heap {
  constructor() {
    this.heap = [null];
  }

  #swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  #siftUp(ind) {
    if (ind === 1) return;

    const parentInd = Math.floor(ind / 2);
    if (this.heap[parentInd] < this.heap[ind]) {
      this.#swap(parentInd, ind);
      this.#siftUp(parentInd);
    }
  }

  #siftDown(ind) {
    const left = ind * 2;
    const right = ind * 2 + 1;

    if (left > this.heap.length - 1) return;
    const maxInd = right && this.heap[right] > this.heap[left] ? right : left;
    if (this.heap[maxInd] > this.heap[ind]) {
      this.#swap(maxInd, ind);
      this.#siftDown(maxInd);
    }
  }

  add(el) {
    this.heap.push(el);
    this.#siftUp(this.heap.length - 1);
  }

  getMax() {
    if (this.size() === 1) {
      return this.heap.pop();
    } else {
      const el = this.heap[1];
      this.heap[1] = this.heap.pop();
      this.#siftDown(1);
      return el;
    }
  }

  size() {
    return this.heap.length - 1;
  }
}

const lastStoneWeight = function (stones) {
  const heap = new Heap();
  for (let i = 0; i < stones.length; i++) {
    heap.add(stones[i]);
  }
  while (heap.size() > 1) {
    const y = heap.getMax();
    const x = heap.getMax();
    if (y > x) {
      heap.add(y - x);
    }
  }
  return heap.size() === 0 ? 0 : heap.getMax();
};
