// 21. Merge Two Sorted Lists
// Linked List, Recursion

// Level - Easy

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the
// nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

const mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  const list = [];
  let node1 = list1;
  let node2 = list2;
  while (node1 || node2) {
    if (node1 && node2 && node1.val <= node2.val) {
      list.push(node1);
      node1 = node1.next;
    } else if (node1 && node2 && node1.val > node2.val) {
      list.push(node2);
      node2 = node2.next;
    } else if (!node1 && node2) {
      list.push(node2);
      node2 = node2.next;
    } else {
      list.push(node1);
      node1 = node1.next;
    }
  }
  for (let i = 0; i < list.length - 1; i++) {
    if (i === list.length - 1) {
      list[i].next === null;
    } else {
      list[i].next = list[i + 1];
    }
  }
  return list[0];
};
