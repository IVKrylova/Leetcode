const reverseList = function (head) {
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
