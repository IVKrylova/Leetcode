// 1091. Shortest Path in Binary Matrix
// Array, Breadth-First Search, Matrix

// Level - Medium

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix.
// If there is no clear path, return -1.
// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the
// bottom-right cell (i.e., (n - 1, n - 1)) such that:
// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different
// and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

// Example 1:
// Input: grid = [[0,1],[1,0]]
// Output: 2

// Example 2:
// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4

// Example 3:
// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1

// Constraints:
// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
class Node {
  constructor(val = null, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class MyQueue {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, this.head);
    this.head.next = this.tail;
    this.curSize = 0;
  }

  size() {
    return this.curSize;
  }

  put(val) {
    if (this.curSize === 0) {
      this.head = new Node(val, this.tail, null);
      this.tail.prev = this.head;
    } else {
      const prev = this.tail.prev;
      const node = new Node(val, this.tail, prev);
      prev.next = node;
      this.tail.prev = node;
    }
    this.curSize += 1;
  }

  get() {
    const node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.curSize -= 1;
    return node.val;
  }
}

const getGraph = (grid) => {
  const graph = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        graph[`${i}-${j}`] = [];
        if (grid[i + 1] && grid[i + 1][j] === 0) {
          graph[`${i}-${j}`].push(`${i + 1}-${j}`);
        }
        if (grid[i + 1] && grid[i + 1][j + 1] === 0) {
          graph[`${i}-${j}`].push(`${i + 1}-${j + 1}`);
        }
        if (grid[i][j + 1] === 0) {
          graph[`${i}-${j}`].push(`${i}-${j + 1}`);
        }
        if (grid[i - 1] && grid[i - 1][j + 1] === 0) {
          graph[`${i}-${j}`].push(`${i - 1}-${j + 1}`);
        }
        if (grid[i - 1] && grid[i - 1][j] === 0) {
          graph[`${i}-${j}`].push(`${i - 1}-${j}`);
        }
        if (grid[i - 1] && grid[i - 1][j - 1] === 0) {
          graph[`${i}-${j}`].push(`${i - 1}-${j - 1}`);
        }
        if (grid[i][j - 1] === 0) {
          graph[`${i}-${j}`].push(`${i}-${j - 1}`);
        }
        if (grid[i + 1] && grid[i + 1][j - 1] === 0) {
          graph[`${i}-${j}`].push(`${i + 1}-${j - 1}`);
        }
      }
    }
  }
  return graph;
};

const bfs = (graph, start, end) => {
  const WHITE = 0;
  const GRAY = 1;
  const BLACK = 2;
  const colors = {};
  for (const key in graph) {
    colors[key] = WHITE;
  }
  const queue = new MyQueue();
  queue.put(start);
  const dist = {};
  dist[start] = 1;

  while (queue.size() > 0) {
    const v = queue.get();
    if (graph[v]) {
      for (let i = 0; i < graph[v].length; i++) {
        if (colors[graph[v][i]] === WHITE) {
          queue.put(graph[v][i]);
          colors[graph[v][i]] = GRAY;
          dist[graph[v][i]] = dist[v] + 1;
          if (graph[v][i] === end) return dist;
        }
      }
    }
    colors[v] = BLACK;
  }
};

const shortestPathBinaryMatrix = function (grid) {
  if (grid.length === 1 && grid[0].length === 1 && grid[0][0] === 0) {
    return 1;
  }

  const graph = getGraph(grid);
  const dist = bfs(graph, "0-0", `${grid.length - 1}-${grid[0].length - 1}`);

  return dist && dist[`${grid.length - 1}-${grid[0].length - 1}`]
    ? dist[`${grid.length - 1}-${grid[0].length - 1}`]
    : -1;
};
