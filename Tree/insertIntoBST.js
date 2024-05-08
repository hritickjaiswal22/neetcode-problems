// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function insertIntoBST(root, val) {
//   function find(node, val) {
//     if (!node) return;

//     if (val < node.val) {
//       if (!node.left) {
//         const newNode = new TreeNode(val);
//         node.left = newNode;
//         return;
//       } else find(node.left, val);
//     } else {
//       if (!node.right) {
//         const newNode = new TreeNode(val);
//         node.right = newNode;
//         return;
//       } else find(node.right, val);
//     }
//   }

//   find(root, val);

//   return root;
// }

function insertIntoBST(root, val) {
  function insert(node, insertedNode) {
    if (!node) return;
    if (insertedNode.val < node.val) {
      if (!node.left) {
        node.left = insertedNode;
        return node;
      } else return insert(node.left, insertedNode);
    } else {
      if (!node.right) {
        node.right = insertedNode;
        return node;
      } else return insert(node.right, insertedNode);
    }
  }

  const newNode = new TreeNode(val);

  if (!root) return newNode;

  insert(root, newNode);

  return root;
}
