const removeNthFromEnd = function (head, n) {
  const arr = [];
  let node = head;
  let i = n + 1;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  const ind = arr.length - n;
  if (arr[ind - 1]) {
    arr[ind - 1].next = arr[ind].next;
    return head;
  } else {
    return head.next;
  }
};
