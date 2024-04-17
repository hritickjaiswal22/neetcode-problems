function mergeTwoLists(list1, list2) {
  let head = null;
  let temp1 = list1;
  let temp2 = list2;
  let temp3 = null;

  while (temp1 && temp2) {
    if (temp1.val <= temp2.val) {
      if (head) temp3.next = temp1;
      else head = temp1;

      temp3 = temp1;
      temp1 = temp1.next;
      temp3.next = null;
    } else {
      if (head) temp3.next = temp2;
      else head = temp2;

      temp3 = temp2;
      temp2 = temp2.next;
      temp3.next = null;
    }
  }

  if (temp1) {
    if (head) temp3.next = temp1;
    else head = temp1;
  }
  if (temp2) {
    if (head) temp3.next = temp2;
    else head = temp2;
  }

  return head;
}
