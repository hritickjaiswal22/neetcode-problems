function deleteDuplicates(head) {
  let prev = head;
  let temp = head;

  while (temp) {
    if (prev && prev.val !== temp.val) {
      prev.next = temp;
      prev = temp;
    }
    temp = temp.next;
  }

  if (prev) prev.next = null;

  return head;
}
