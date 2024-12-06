// 743. Network Delay Time
// Depth-First Search, Breadth-First Search, Graph, Heap (Priority Queue), Shortest Path
// Level - Medium

// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list
// of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi
// is the target node, and wi is the time it takes for a signal to travel from source to target.
// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes
// to receive the signal. If it is impossible for all the n nodes to receive the signal, return
// -1.

// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

// Example 2:
// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1

// Example 3:
// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1

// Constraints:
// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

const compare = (a, b) => {
  if (a[2] > b[2]) {
    return 1;
  } else if (a[2] === b[2]) {
    return 0;
  } else return -1;
};

class Heap {
  constructor(comparator) {
    this.heap = [null];
    this.compare = comparator;
  }

  size() {
    return this.heap - 1;
  }

  #swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  #siftUp(ind) {
    if (ind === 1) return;
    const parentInd = Math.floor(ind / 2);
    if (this.compare(this.heap[parentInd], this.heap[ind]) < 1) {
      this.#swap(this.heap[parentInd], this.heap[ind]);
      this.#siftUp(parentInd);
    }
  }

  #siftDown(ind) {
    const left = ind * 2;
    const right = ind * 2 + 1;

    if (left > this.size()) return;
    const minInd =
      right < this.size() && this.compare(this.heap[right], this.heap[left]) < 1
        ? right
        : left;
    if (this.compare(this.heap[minInd], this.heap[ind]) > -1) {
      this.#swap(minInd, ind);
      this.#siftDown(minInd);
    }
  }

  add(el) {
    this.heap.push(el);
    this.#siftUp(this.heap.length - 1);
  }

  getMin() {
    const el = this.heap[1];
    this.heap[1] = this.heap[this.size()];
    this.heap.pop();
    this.#siftDown(this.size());
    return el;
  }
}

const getGraph = (times) => {
  const graph = {};
  for (let i = 0; i < times.length; i++) {
    if (graph[times[i][0]]) {
      graph[times[i][0]].push([times[i][1], times[i][2]]);
    } else {
      graph[times[i][0]] = [[times[i][1], times[i][2]]];
    }
  }
  return graph;
};

const addVertex = (graph, checkedEdges, notAdded, v) => {
  notAdded.delete(v);
  for (let i = 0; i < graph[v].length; i++) {
    checkedEdges.add(graph[v][i]);
  }
};

const networkDelayTime = function (times, n, k) {
  const graph = getGraph(times);
  const checkedEdges = new Heap(compare);
  const notAdded = new Set();
  let res = 0;
  for (let i = 1; i <= n; i++) {
    notAdded.add(i);
  }
  addVertex(graph, checkedEdges, notAdded, k);
  while (notAdded.size > 0 && checkedEdges.size() > 0) {
    const edge = checkedEdges.getMin();
    if (notAdded.has(edge[0])) {
      addVertex(graph, checkedEdges, notAdded, edge[0]);
      res += edge[1];
    }
  }
  return notAdded.size === 0 ? res : -1;
};

networkDelayTime(
  [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  4,
  2
); // 2
