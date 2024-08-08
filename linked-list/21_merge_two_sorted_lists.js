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
