// 2. Add Two Numbers
// Linked List, Math, Recursion

// Level - Meduim

// You are given two non-empty linked lists representing two non-negative integers. The digits
// are stored in reverse order, and each of their nodes contains a single digit. Add the two
// numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let memo = 0;
  let prev;
  while (node1 && node2) {
    const val = node1.val + node2.val + memo;
    node1.val = val % 10;
    memo = Math.floor(val / 10);
    prev = node1;
    node1 = node1.next;
    node2 = node2.next;
  }

  if (node1) {
    while (node1) {
      const val = node1.val + memo;
      node1.val = val % 10;
      memo = Math.floor(val / 10);
      prev = node1;
      node1 = node1.next;
    }
  } else {
    prev.next = node2;
    while (node2) {
      const val = node2.val + memo;
      node2.val = val % 10;
      memo = Math.floor(val / 10);
      prev = node2;
      node2 = node2.next;
    }
  }
  if (memo) {
    prev.next = {
      val: memo,
      next: null,
    };
  }
  return l1;
};
