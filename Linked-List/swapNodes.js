// function swapNodes(head, n) {
//   let kNode = null;
//   let lastKNode = null;
//   let temp = head;
//   let k = 0;

//   while (temp) {
//     k++;

//     if (k === n) {
//       kNode = temp;
//       lastKNode = head;
//     }
//     if (k > n) {
//       lastKNode = lastKNode.next;
//     }

//     temp = temp.next;
//   }

//   const swapVal = kNode.val;
//   kNode.val = lastKNode.val;
//   lastKNode.val = swapVal;

//   return head;
// }

function swapNodes(head, k) {
  let temp1 = head;
  let temp2 = head;
  let temp3 = head;
  let diff = 1;

  while (temp1) {
    if (diff === k) temp2 = temp1;
    if (diff > k) temp3 = temp3.next;

    temp1 = temp1.next;
    diff++;
  }

  const swapVal = temp2.val;
  temp2.val = temp3.val;
  temp3.val = swapVal;

  return head;
}
