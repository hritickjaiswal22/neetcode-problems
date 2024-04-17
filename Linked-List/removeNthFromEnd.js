// function removeNthFromEnd(head, n) {
//   let prev = null;
//   let temp = head;
//   let k = 0;

//   while (temp) {
//     k++;

//     if (k > n) {
//       if (prev) prev = prev.next;
//       else prev = head;
//     }

//     temp = temp.next;
//   }

//   if (!prev) return head.next;
//   const deletedNode = prev.next;
//   prev.next = prev.next.next;
//   deletedNode.next = null;

//   return head;
// }

function removeNthFromEnd(head, n) {
  if (!head || !head.next) return head;

  let temp1 = head;
  let temp2 = head;
  let prev = head;
  let k = 0;

  while (temp1) {
    if (k >= n) {
      prev = temp2;
      temp2 = temp2.next;
    }

    k++;
    temp1 = temp1.next;
  }

  if (k === n) {
    head = head.next;
    return head;
  }
  if (prev) prev.next = prev.next.next;

  return head;
}
