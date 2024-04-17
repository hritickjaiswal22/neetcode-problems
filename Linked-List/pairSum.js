// function pairSum(head) {
//   function find(node, obj) {
//     if (!node) return;

//     find(node.next);

//     result = Math.max(result, node.val + obj.node.val);
//     obj.node = obj.node.next;
//   }

//   let result = Number.MIN_SAFE_INTEGER;

//   find(head, { node: head });

//   return result;
// }

function pairSum(head) {
  function find(node) {
    if (!node) return;

    find(node.next);

    if (node && temp) {
      result = Math.max(result, temp.val + node.val);
      temp = temp.next;
    }
  }

  let result = Number.MIN_SAFE_INTEGER;
  let temp = head;

  find(head);

  return result;
}
