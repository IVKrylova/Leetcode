// 210. Course Schedule II
// Depth-First Search, Breadth-First Search, Graph, Topological Sort

// Level - Medium

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You
// are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take
// course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid
// answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
// course 0. So the correct course order is [0,1].

// Example 2:
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished
// both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:
// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const WHITE = 0;
const GREY = 1;
const BLACK = -1;

const getGraph = (prerequisites) => {
  const graph = {};
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][0]]
      ? graph[prerequisites[i][0]].push(prerequisites[i][1])
      : (graph[prerequisites[i][0]] = [prerequisites[i][1]]);
  }
  return graph;
};

const dfs = (graph, colors, order, start) => {
  const stack = [start];
  while (stack.length > 0) {
    const v = stack.pop();
    if (colors[v] === WHITE) {
      colors[v] = GREY;
      stack.push(v);
      if (graph[v]) {
        for (let i = 0; i < graph[v].length; i++) {
          if (colors[graph[v][i]] === WHITE) {
            stack.push(graph[v][i]);
          } else if (colors[graph[v][i]] === GREY) {
            return false;
          }
        }
      }
    } else if (colors[v] === GREY) {
      colors[v] = BLACK;
      order.push(v);
    }
  }
  return true;
};

const findOrder = function (numCourses, prerequisites) {
  const graph = getGraph(prerequisites);
  const colors = new Array(numCourses).fill(WHITE);
  const order = [];
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(graph, colors, order, i)) return [];
  }
  return order;
};
