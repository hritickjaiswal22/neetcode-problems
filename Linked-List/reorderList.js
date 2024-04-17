// function reorderList(head) {
//   if (!head || !head.next || !head.next.next) return head;

//   let n = 0;
//   let prev = head;
//   let fast = head;
//   let slow = head;

//   while (fast && fast.next) {
//     n += 2;
//     prev = slow;
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   if (fast) n++;

//   let list1 = head;
//   let list2 = prev.next;
//   prev.next = null;
//   list2 = reverseList(list2);
//   const resultHead = list1;
//   let newListCurr = null;

//   while (list1 && list2) {
//     const list1Next = list1.next;
//     const list2Next = list2.next;

//     list2.next = null;
//     list1.next = list2;

//     if (!newListCurr) newListCurr = list2;
//     else {
//       newListCurr.next = list1;
//       newListCurr = list2;
//     }

//     list1 = list1Next;
//     list2 = list2Next;
//   }
//   if (list1) {
//     newListCurr.next = list1;
//     list1.next = null;
//   }
//   if (list2) {
//     newListCurr.next = list2;
//     list2.next = null;
//   }

//   return resultHead;
// }

// function reverseList(head) {
//   if (!head || !head.next) return head;

//   let prev = null;
//   let curr = head;

//   while (curr) {
//     const next = curr.next;

//     curr.next = prev;
//     prev = curr;

//     if (next) curr = next;
//     else break;
//   }

//   return curr;
// }

function reorderList(head) {
  if (!head.next) return head;

  let n = 0;
  let slow = head;
  let fast = head;
  let lastNode = null;
  let prev = head;

  while (slow) {
    n++;
    slow = slow.next;
  }

  slow = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (n & 1) {
    lastNode = slow;
    slow = slow.next;
  }
  prev.next = null;

  let temp1 = head;
  let temp2 = reverseList(slow);
  let newHead = temp1;
  let prev2 = temp2;

  while (temp1 && temp2) {
    const next1 = temp1.next;
    const next2 = temp2.next;

    temp1.next = temp2;
    temp2.next = next1;

    prev2 = temp2;
    temp1 = next1;
    temp2 = next2;
  }

  if (lastNode) {
    prev2.next = lastNode;
    lastNode.next = null;
  }

  return newHead;
}

function reverseList(head) {
  let prev = null;
  let temp = head;

  while (temp) {
    const next = temp.next;

    temp.next = prev;
    prev = temp;
    temp = next;
  }

  return prev;
}
