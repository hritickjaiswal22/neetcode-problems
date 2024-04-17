function partition(head, x) {
  let leftHead = null;
  let rightHead = null;
  let leftTail = null;
  let rightTail = null;
  let temp = head;

  while (temp) {
    const nextNode = temp.next;

    if (temp.val < x) {
      if (leftHead) {
        leftTail.next = temp;
        leftTail = temp;
      } else {
        leftHead = temp;
        leftTail = temp;
      }
    } else {
      if (rightHead) {
        rightTail.next = temp;
        rightTail = temp;
      } else {
        rightHead = temp;
        rightTail = temp;
      }
    }

    temp.next = null;
    temp = nextNode;
  }

  if (leftTail) leftTail.next = rightHead;

  return leftHead || rightHead;
}
