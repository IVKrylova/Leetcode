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

const getMinNotVisited = (visited, dist, n) => {
  let curV = null;
  let curDist = Infinity;
  for (let v = 1; v <= n; v++) {
    if (dist[v] < curDist && !visited[v]) {
      curDist = dist[v];
      curV = v;
    }
  }
  return curV;
};

const relax = (u, v, weight, dist) => {
  if (dist[v] > dist[u] + weight) {
    dist[v] = dist[u] + weight;
  }
};

const networkDelayTime = function (times, n, k) {
  const graph = getGraph(times);
  const visited = new Array(n + 1).fill(false);
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  dist[0] = 0;
  visited[0] = true;
  while (true) {
    const u = getMinNotVisited(visited, dist, n);
    if (u === null || dist[u] === Infinity) break;
    visited[u] = true;
    if (graph[u]) {
      const neighbours = graph[u];
      for (let i = 0; i < neighbours.length; i++) {
        relax(u, neighbours[i][0], neighbours[i][1], dist);
      }
    }
  }
  return visited.every((el) => el) ? Math.max(...dist) : -1;
};
