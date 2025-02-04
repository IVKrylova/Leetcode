// 23. Merge k Sorted Lists
// Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort

// Level - Hard

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 10^4.

const addNode = (start, n) => {
  let root = start;
  let node = n;
  while (node) {
    const next = node.next;
    let cur = root;
    let prev = null;
    while (cur && cur.val <= node.val) {
      prev = cur;
      cur = cur.next;
    }
    if (prev === null) {
      root = node;
      node.next = cur;
    } else if (cur === null) {
      prev.next = node;
      node.next = null;
    } else {
      prev.next = node;
      node.next = cur;
    }
    node = next;
  }
  return root;
};

const mergeKLists = function (lists) {
  if (lists.length === 0 || (lists.length === 1 && lists[0] === null)) {
    return null;
  }
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = addNode(root, lists[i]);
  }
  return root;
};
