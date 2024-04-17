function hasCycle(head) {
  let slow = head;
  let fast = head;
  let flag = false;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      flag = true;
      break;
    }
  }

  if (flag) return true;
  return false;
}
