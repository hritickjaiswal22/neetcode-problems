// function isSubtree(root, subRoot) {
//   return find(root, subRoot);
// }

// function find(root, subRoot) {
//   if (root === null) return false;

//   if (root.val === subRoot.val) {
//     const check = isIdentical(root, subRoot);
//     if (check) return true;
//   }

//   const left = find(root.left, subRoot);
//   const right = find(root.right, subRoot);

//   return left || right;
// }

// function isIdentical(root1, root2) {
//   if (root1 === null && root2 === null) return true;
//   if (root1 === null || root2 === null) return false;

//   if (root1.val === root2.val) {
//     const left = isIdentical(root1.left, root2.left);
//     const right = isIdentical(root1.right, root2.right);

//     return left && right;
//   }

//   return false;
// }

function isSubtree(root, subRoot) {
  function findHash(node, checkHash) {
    if (!node) return "";

    let hash = `${node.val}`;
    const left = findHash(node.left, checkHash);
    const right = findHash(node.right, checkHash);

    hash += left ? `#${left}` : "null";
    hash += right ? `#${right}` : "null";

    if (checkHash && checkHash === hash) result = true;

    return hash;
  }

  let result = false;
  const resultHash = findHash(subRoot, "");
  findHash(root, resultHash);

  return result;
}
