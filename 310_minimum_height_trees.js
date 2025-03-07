// 310. Minimum Height Trees
// Depth-First Search, Breadth-First Search, Graph, Topological Sort

// Level - Medium

// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any
// connected graph without simple cycles is a tree.
// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates
// that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree
// as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees,
// those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).
// Return a list of all MHTs' root labels. You can return the answer in any order.
// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:
// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Example 2:
// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// Constraints:
// 1 <= n <= 2 * 10^4
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

// const dfs = (graph, start, n, curMin) => {
//   const colors = new Array(n).fill("white");
//   let stack = [[start, 0]];
//   let height = 0;
//   while (stack.length > 0) {
//     const cur = stack[stack.length - 1][1];
//     while (stack.length > 0 && stack[stack.length - 1][1] === cur) {
//       const el = stack.pop();
//       colors[el[0]] = "grey";
//       if (graph[el[0]]) {
//         for (let i = 0; i < graph[el[0]].length; i++) {
//           if (colors[graph[el[0]][i]] === "white") {
//             stack.push([graph[el[0]][i], cur + 1]);
//           }
//         }
//       }
//       colors[el[[0]]] = "black";
//     }
//     height++;
//     if (height > curMin) return [Infinity, start];
//   }
//   return [height, start];
// };

// const buildGraph = (edges) => {
//   const graph = {};
//   for (let i = 0; i < edges.length; i++) {
//     graph[edges[i][0]]
//       ? graph[edges[i][0]].push(edges[i][1])
//       : (graph[edges[i][0]] = [edges[i][1]]);
//     graph[edges[i][1]]
//       ? graph[edges[i][1]].push(edges[i][0])
//       : (graph[edges[i][1]] = [edges[i][0]]);
//   }
//   return graph;
// };

// const findMinHeightTrees = function (n, edges) {
//   const res = [];
//   const graph = buildGraph(edges);
//   const entries = Object.entries(graph).sort(
//     (a, b) => b[1].length - a[1].length
//   );
//   let curMin = Infinity;
//   for (let i = 0; i < n / 2; i++) {
//     const h = dfs(graph, entries[i][0], n, curMin);
//     if (h[0] < curMin) curMin = h[0];
//     res.push(h);
//   }
//   const min = Math.min(...res.map((el) => el[0]));
//   return res.filter((el) => el[0] === min).map((el) => el[1]);
// };

const buildGraph = (edges) => {
  const graph = new Map();
  for (let i = 0; i < edges.length; i++) {
    if (!graph.has(edges[i][0])) graph.set(edges[i][0], new Set());
    graph.get(edges[i][0]).add(edges[i][1]);
    if (!graph.has(edges[i][1])) graph.set(edges[i][1], new Set());
    graph.get(edges[i][1]).add(edges[i][0]);
  }
  return graph;
};

const findMinHeightTrees = function (n, edges) {
  if (edges.length === 0) return [0];
  const graph = buildGraph(edges, n);
  const stack = [];
  while (graph.size > 2) {
    graph.forEach((nodes, v) => {
      if (nodes.size === 1) stack.push(v);
    });
    while (stack.length > 0) {
      const v = stack.pop();
      const cur = Array.from(graph.get(v))[0];
      graph.get(cur).delete(v);
      graph.delete(v);
    }
  }
  const res = Array.from(graph);
  return res.map((el) => el[0]);
};

findMinHeightTrees(6, [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 4],
  [5, 4],
]); // 3 4
