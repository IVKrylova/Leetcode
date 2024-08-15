const removeElements = function (head, val) {
  if (!head) return null;
  let prev = head;
  while (prev && prev.val === val) {
    prev = prev.next;
  }
  if (prev === null) return null;
  let node = prev.next;
  const newHead = prev;
  while (node) {
    const next = node.next;
    if (node.val === val) {
      prev.next = next ? next : null;
    } else {
      prev = node;
    }

    node = next;
  }
  return newHead;
};
