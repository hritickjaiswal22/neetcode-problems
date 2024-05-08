// /*
//     HAD TO LOOK AT THE SOLUTION ,
//     CREATING "s" FOR EACH NODE AND THEN CHECKING IF HAS OCCURED MULTIPLE TIMES IF YES THEN STORE IT IN "result"
// */

// function findDuplicateSubtrees(root) {
//   function find(node) {
//     if (!node) return "null";

//     const s = `${node.val},${find(node.left)},${find(node.right)}`;

//     if (hash[s]) {
//       if (hash[s].length === 1) result.push(node);
//       hash[s].push(node);
//     } else {
//       hash[s] = [node];
//     }
//   }

//   const hash = {};
//   const result = [];

//   find(root);

//   return result;
// }

function findDuplicateSubtrees(root) {
  function find(node) {
    if (!node) return "";

    let hash = `${node.val}`;
    const left = find(node.left);
    const right = find(node.right);

    hash += left ? `#${left}` : "null";
    hash += right ? `#${right}` : "null";

    if (hashMap[hash]) result[node.val] = node;
    else hashMap[hash] = true;

    return hash;
  }

  const result = {};
  const hashMap = {};

  find(root);

  return Object.values(result);
}
