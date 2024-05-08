// function tree2str(root) {
//   function find(node) {
//     if (!node) return "";

//     const left = find(node.left);
//     const right = find(node.right);
//     let result = `${node.val}`;

//     if (!left && !right) return result;
//     if ((left && right) || (!left && right)) {
//       result += "(";
//       result += left;
//       result += ")";
//       result += "(";
//       result += right;
//       result += ")";

//       return result;
//     }
//     if (left && !right) {
//       result += "(";
//       result += left;
//       result += ")";

//       return result;
//     }
//   }

//   return find(root);
// }

function tree2str(root) {
  function find(node) {
    if (!node) return "";

    let str = `${node.val}`;

    const left = find(node.left);
    const right = find(node.right);

    if (!left && !right) return str;
    else if (left && !right) str += `(${left})`;
    else str += `(${left})(${right})`;

    return str;
  }

  return find(root);
}
