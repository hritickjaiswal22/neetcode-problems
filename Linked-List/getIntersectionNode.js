function getIntersectionNode(headA, headB) {
  let n1 = 0;
  let n2 = 0;
  let temp1 = headA;
  let temp2 = headB;

  while (temp1) {
    n1++;
    temp1 = temp1.next;
  }

  while (temp2) {
    n2++;
    temp2 = temp2.next;
  }

  temp1 = headA;
  temp2 = headB;

  while (n1 > n2 && temp1) {
    temp1 = temp1.next;
    n1--;
  }

  while (n2 > n1 && temp2) {
    temp2 = temp2.next;
    n2--;
  }

  while (temp1 !== temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return temp1;
}
