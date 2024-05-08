// function kthSmallest(root, k) {
//   function find(node) {
//     if (!node) return;

//     find(node.left);
//     count++;
//     if (count === k) result = node.val;
//     find(node.right);
//   }

//   let count = 0;
//   let result = -1;

//   find(root);

//   return result;
// }

function kthSmallest(root, k) {
  function find(node) {
    if (!node) return;

    find(node.left);
    temp++;
    if (temp === k) result = node.val;
    find(node.right);
  }

  let result = -1;
  let temp = 0;

  find(root);

  return result;
}
