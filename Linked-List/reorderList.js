function reorderList(head) {
  if (!head || !head.next || !head.next.next) return head;

  let n = 0;
  let prev = head;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    n += 2;
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast) n++;

  let list1 = head;
  let list2 = prev.next;
  prev.next = null;
  list2 = reverseList(list2);
  const resultHead = list1;
  let newListCurr = null;

  while (list1 && list2) {
    const list1Next = list1.next;
    const list2Next = list2.next;

    list2.next = null;
    list1.next = list2;

    if (!newListCurr) newListCurr = list2;
    else {
      newListCurr.next = list1;
      newListCurr = list2;
    }

    list1 = list1Next;
    list2 = list2Next;
  }
  if (list1) {
    newListCurr.next = list1;
    list1.next = null;
  }
  if (list2) {
    newListCurr.next = list2;
    list2.next = null;
  }

  return resultHead;
}

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
