function mergeKLists(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  let resultList = lists[0];

  for (let i = 1; i < lists.length; i++) {
    if (!lists[i]) continue;
    if (!resultList) {
      resultList = lists[i];
      continue;
    }

    let list1 = resultList;
    let list2 = lists[i];
    let temp = null;
    let tempHead = list1;

    if (list2.val < list1.val) tempHead = list2;

    while (list1 && list2) {
      if (list1.val <= list2.val) {
        const nextNode = list1.next;

        temp = addToList(temp, list1);
        list1 = nextNode;
      } else {
        const nextNode = list2.next;

        temp = addToList(temp, list2);
        list2 = nextNode;
      }
    }
    while (list1) {
      const nextNode = list1.next;

      temp = addToList(temp, list1);
      list1 = nextNode;
    }
    while (list2) {
      const nextNode = list2.next;

      temp = addToList(temp, list2);
      list2 = nextNode;
    }

    resultList = tempHead;
  }

  return resultList;
}

function addToList(list, node) {
  if (!list) list = node;
  else {
    list.next = node;
    list = list.next;
  }

  list.next = null;

  return list;
}
