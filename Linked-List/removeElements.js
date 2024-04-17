function removeElements(head, val) {
  let prev = null;
  let temp = head;

  while (temp && temp.val === val) temp = temp.next;

  let newHead = temp;

  while (temp) {
    if (temp.val === val) temp = temp.next;
    else {
      if (prev) prev.next = temp;
      prev = temp;
      temp = temp.next;
    }
  }

  if (prev) prev.next = null;

  return head;
}
