// 92. Reverse Linked List II
// Linked List

// Level - Medium

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the
// nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

const reverseList = (head) => {
  if (!head) return null;
  let prev = null;
  let node = head;
  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

const reverseBetween = function (head, left, right) {
  if (left === right) return head;

  let prevStart = null;
  let start = null;
  let nextEnd = null;
  let i = 1;
  let node = head;

  while (i < right && node) {
    if (i === left - 1) prevStart = node;
    if (i === left) start = node;
    node = node.next;
    i++;
  }

  if (right === i) nextEnd = node.next;
  node.next = null;
  const newHead = reverseList(start);
  if (prevStart) prevStart.next = newHead;
  start.next = nextEnd;

  return left === 1 ? newHead : head;
};
