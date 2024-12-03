// 230. Kth Smallest Element in a BST
// Tree, Depth-First Search, Binary Search Tree, Binary Tree

// Level - Medium

// Given the root of a binary search tree, and an integer k, return the kth smallest value
// (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 10^4
// 0 <= Node.val <= 10^4

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
    if (this.heap[ind] < this.heap[parentInd]) {
      this.#swap(parentInd, ind);
      this.#siftUp(parentInd);
    }
  }

  #siftDown(ind) {
    const left = ind * 2;
    const right = ind * 2 + 1;
    if (left > this.heap.length - 1) return;
    const maxInd = right && this.heap[right] < this.heap[left] ? right : left;
    if (this.heap[maxInd] < this.heap[ind]) {
      this.#swap(maxInd, ind);
      this.#siftDown(maxInd);
    }
  }

  add(el) {
    this.heap.push(el);
    this.#siftUp(this.heap.length - 1);
  }

  get() {
    const val = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.#siftDown(1);
    return val;
  }
}

const dfs = (node, heap) => {
  if (!node) return;
  heap.add(node.val);
  dfs(node.left, heap);
  dfs(node.right, heap);
};

const kthSmallest = function (root, k) {
  const heap = new Heap();
  dfs(root, heap);
  let val = heap.get();
  for (let i = 1; i < k; i++) {
    val = heap.get();
  }
  return val;
};
