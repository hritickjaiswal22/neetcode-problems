function lowestCommonAncestor(root, p, q) {
  function find(node, p, q) {
    if (!node)
      return {
        visited: false,
        node: null,
      };

    const left = find(node.left, p, q);
    const right = find(node.right, p, q);

    if (node === p || node === q) {
      if (left.visited || right.visited)
        return {
          visited: true,
          node: node,
        };

      return {
        visited: true,
        node: null,
      };
    }

    if (left.visited && right.visited)
      return {
        visited: true,
        node: node,
      };
    else if (left.visited) return left;
    else if (right.visited) return right;
    else
      return {
        visited: false,
        node: null,
      };
  }

  return find(root, p, q).node;
}
