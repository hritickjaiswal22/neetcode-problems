function smallestFromLeaf(root) {
  function find(node, path) {
    if (!node) return;
    if (!node.left && !node.right) {
      path += String.fromCharCode(97 + node.val);

      const reversedPath = path.split("").reverse().join("");

      if (!result || reversedPath < result) result = reversedPath;
    }

    path += String.fromCharCode(97 + node.val);

    find(node.left, path);
    find(node.right, path);
  }

  let result = "";

  find(root, "");

  return result;
}
