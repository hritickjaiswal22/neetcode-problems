function swapPairs(head) {
  if (!head || !head.next) return head;

  let newHead = head.next;
  let temp = head;
  let prev = null;

  while (temp && temp.next) {
    const nextNode = temp.next.next;

    const node1 = temp;
    const node2 = temp.next;

    node2.next = node1;
    node1.next = nextNode;

    if (prev) {
      prev.next = node2;
    }
    prev = node1;
    temp = nextNode;
  }

  return newHead;
}
