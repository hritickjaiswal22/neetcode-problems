// function connect(root) {
//   function find(node, next) {
//     if (!node) return;

//     node.next = next;

//     find(node.left, node.right);
//     find(node.right, next ? next.left : null);
//   }

//   find(root, null);
// }

function connect(root) {
  return find(root, null);
}

function find(node, nextNode) {
  if (!node) return;

  node.next = nextNode;

  find(node.left, node.right);
  find(node.right, nextNode ? nextNode.left : null);
}
