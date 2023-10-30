class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  if (!head) return head;

  let temp = head;

  while (temp) {
    const nextNode = temp.next;

    const newNode = new ListNode(temp.val);
    temp.next = newNode;
    newNode.next = nextNode;

    temp = nextNode;
  }

  const newHead = head.next;

  temp = head;
  while (temp) {
    const newNode = temp.next;
    const next = temp.next.next;

    newNode.random = temp.random ? temp.random.next : null;

    temp = next;
  }

  temp = head;
  while (temp) {
    const newNode = temp.next;
    const next = temp.next.next;

    if (newNode.next) newNode.next = newNode.next.next;
    temp.next = next;

    temp = next;
  }

  return newHead;
}
