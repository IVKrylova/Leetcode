// 547. Number of Provinces
// Depth-First Search, Breadth-First Search, Union Find, Graph

// Level - Medium

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b,
// and city b is connected directly with city c, then city a is connected indirectly with city c.
// A province is a group of directly or indirectly connected cities and no other cities outside of the group.
// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are
// directly connected, and isConnected[i][j] = 0 otherwise.
// Return the total number of provinces.

// Example 1:
// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

// Example 2:
// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

// Constraints:
// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

const getGraph = (isConnected) => {
  const graph = {};
  const colors = {};
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      if (isConnected[i][j]) {
        colors[`${i}i`] = "WHITE";
        colors[`${j}j`] = "WHITE";
        graph[`${i}i`]
          ? graph[`${i}i`].push(`${j}j`)
          : (graph[`${i}i`] = [`${j}j`]);
        graph[`${j}j`]
          ? graph[`${j}j`].push(`${i}i`)
          : (graph[`${j}j`] = [`${i}i`]);
      }
    }
  }
  return [graph, colors];
};

const bfs = (city, colors, graph) => {
  const stack = [city];
  while (stack.length > 0) {
    const v = stack.pop();
    const neighbours = graph[v];
    if (neighbours) {
      for (let i = 0; i < neighbours.length; i++) {
        if (colors[neighbours[i]] === "WHITE") {
          colors[neighbours[i]] = "GREY";
          stack.push(neighbours[i]);
        }
      }
    }
    colors[v] = "BLACK";
  }
};

const findCircleNum = function (isConnected) {
  const [graph, colors] = getGraph(isConnected);
  let count = 0;
  for (const city in colors) {
    if (colors[city] === "WHITE") {
      count++;
      bfs(city, colors, graph);
    }
  }
  return count;
};
