function reverseList(head) {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;

    curr.next = prev;
    prev = curr;

    if (next) curr = next;
    else break;
  }

  return curr;
}
