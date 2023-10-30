function removeNthFromEnd(head, n) {
  let prev = null;
  let temp = head;
  let k = 0;

  while (temp) {
    k++;

    if (k > n) {
      if (prev) prev = prev.next;
      else prev = head;
    }

    temp = temp.next;
  }

  if (!prev) return head.next;
  const deletedNode = prev.next;
  prev.next = prev.next.next;
  deletedNode.next = null;

  return head;
}
