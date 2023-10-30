function swapNodes(head, n) {
  let kNode = null;
  let lastKNode = null;
  let temp = head;
  let k = 0;

  while (temp) {
    k++;

    if (k === n) {
      kNode = temp;
      lastKNode = head;
    }
    if (k > n) {
      lastKNode = lastKNode.next;
    }

    temp = temp.next;
  }

  const swapVal = kNode.val;
  kNode.val = lastKNode.val;
  lastKNode.val = swapVal;

  return head;
}
