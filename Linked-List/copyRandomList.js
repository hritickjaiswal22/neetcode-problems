// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.random = null;
//   }
// }

// function copyRandomList(head) {
//   if (!head) return head;

//   let temp = head;

//   while (temp) {
//     const nextNode = temp.next;

//     const newNode = new ListNode(temp.val);
//     temp.next = newNode;
//     newNode.next = nextNode;

//     temp = nextNode;
//   }

//   const newHead = head.next;

//   temp = head;
//   while (temp) {
//     const newNode = temp.next;
//     const next = temp.next.next;

//     newNode.random = temp.random ? temp.random.next : null;

//     temp = next;
//   }

//   temp = head;
//   while (temp) {
//     const newNode = temp.next;
//     const next = temp.next.next;

//     if (newNode.next) newNode.next = newNode.next.next;
//     temp.next = next;

//     temp = next;
//   }

//   return newHead;
// }

function copyRandomList(head) {
  let temp = head;
  let newHead = null;
  let prev = null;

  while (temp) {
    const nextNode = temp.next;

    const newNode = new Node(temp.val);
    temp.next = newNode;
    newNode.next = nextNode;

    temp = nextNode;
  }

  temp = head;

  while (temp) {
    const newNode = temp.next;
    const nextNode = temp.next.next;

    newNode.random = temp.random ? temp.random.next : null;

    temp = nextNode;
  }

  temp = head;

  while (temp) {
    const newNode = temp.next;
    const nextNode = temp.next.next;

    if (newHead) {
      prev.next = newNode;
    } else {
      newHead = newNode;
    }

    prev = newNode;
    temp.next = nextNode;
    prev.next = null;
    temp = nextNode;
  }

  return newHead;
}
