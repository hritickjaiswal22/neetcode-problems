// function postorderTraversal(root) {
//   function find(node) {
//     if (!node) return;

//     find(node.left);
//     find(node.right);
//     result.push(node.val);
//   }

//   const result = [];

//   find(root);

//   return result;
// }

function postorderTraversal(root) {
  function find(node) {
    if (!node) return;

    find(node.left);
    find(node.right);
    result.push(node.val);
  }

  const result = [];

  find(root);

  return result;
}
