function leafSimilar(root1, root2) {
  const seq1 = leafSequence(root1, []);
  const seq2 = leafSequence(root2, []);

  if (JSON.stringify(seq1) === JSON.stringify(seq2)) return true;
  return false;
}

function leafSequence(node, result) {
  if (!node) return result;
  if (!node.left && !node.right) {
    result.push(node.val);
    return result;
  }

  result = leafSequence(node.left, result);
  result = leafSequence(node.right, result);

  return result;
}
