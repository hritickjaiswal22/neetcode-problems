// Waste of time

// function deleteNode(root, key) {
//   function find(node, parent) {
//     if (!node) return null;

//     if (node.val === key) return { node, parent };

//     if (key < node.val) return find(node.left, node);
//     else return find(node.right, node);
//   }

//   const obj = find(root, null);

//   if (!obj) return root;

//   const nodeToBeDeleted = obj.node;
//   const parentOfNodeToBeDeleted = obj.parent;

//   if (!nodeToBeDeleted.left && !nodeToBeDeleted.right) {
//     if (!parentOfNodeToBeDeleted) return null;
//     if (
//       parentOfNodeToBeDeleted.left &&
//       parentOfNodeToBeDeleted.left.val === nodeToBeDeleted.val
//     )
//       parentOfNodeToBeDeleted.left = null;
//     else parentOfNodeToBeDeleted.right = null;

//     return root;
//   } else if (nodeToBeDeleted.left && nodeToBeDeleted.right) {
//   } else {
//     if (nodeToBeDeleted.left) {
//       if (!parentOfNodeToBeDeleted) return nodeToBeDeleted.left;
//       if (
//         parentOfNodeToBeDeleted.left &&
//         parentOfNodeToBeDeleted.left.val === nodeToBeDeleted.val
//       )
//         parentOfNodeToBeDeleted.left = nodeToBeDeleted.left;
//       else parentOfNodeToBeDeleted.right = nodeToBeDeleted.left;

//       return root;
//     } else {
//       if (!parentOfNodeToBeDeleted) return nodeToBeDeleted.right;
//       if (
//         parentOfNodeToBeDeleted.left &&
//         parentOfNodeToBeDeleted.left.val === nodeToBeDeleted.val
//       )
//         parentOfNodeToBeDeleted.left = nodeToBeDeleted.right;
//       else parentOfNodeToBeDeleted.right = nodeToBeDeleted.right;

//       return root;
//     }
//   }
// }
