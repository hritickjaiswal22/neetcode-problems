function mergeInBetween(list1, a, b, list2) {
  let aMinus1thNode = null;
  let bPlus1thNode = null;
  let i = 0;
  let temp = list1;
  let list2End = list2;

  while (list2End.next) list2End = list2End.next;

  while (temp) {
    if (i === a - 1) aMinus1thNode = temp;
    if (i === b) {
      bPlus1thNode = temp.next;
    }

    i++;
    temp = temp.next;
  }

  aMinus1thNode.next = list2;
  list2End.next = bPlus1thNode;

  return list1;
}
