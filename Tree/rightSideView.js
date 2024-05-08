// function rightSideView(root) {
//   function find(node, x, y) {
//     if (!node) return;

//     if (!hash[y]) {
//       hash[y] = {
//         x,
//         val: node.val,
//       };
//     } else {
//       hash[y] = {
//         x,
//         val: node.val,
//       };
//     }

//     find(node.left, x - 1, y + 1);
//     find(node.right, x + 1, y + 1);
//   }

//   const hash = {};

//   find(root, 0, 0);

//   return Object.values(hash).map((obj) => obj.val);
// }

function rightSideView(root) {
  function find(node, level) {
    if (!node) return;

    if (hash[level] === undefined) hash[level] = node.val;

    find(node.right, level + 1);
    find(node.left, level + 1);
  }

  const hash = {};
  const result = [];

  find(root, 0);

  return Object.values(hash);
}
